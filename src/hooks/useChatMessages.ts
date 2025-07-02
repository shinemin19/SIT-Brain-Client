// hooks/useChatMessages.ts
import { useState, useCallback, useEffect, useRef } from 'react';
import type { Message, ChatHistoryItem, ChatState } from '../types/chat.types';
import { dummyChatMessages, getMessageCount } from '../data/dummyChatMessages';

export const useChatMessages = (studentId: string, initialChatId?: number | null) => {
  const [state, setState] = useState<ChatState>({
    currentChatId: initialChatId || null,
    chatHistory: [],
    messagesByChat: {},
    isTyping: false,
    isLoading: false,
  });
  
  state.currentChatId = initialChatId || null;

  // Use ref to track if chat history has been loaded to prevent re-loading
  const hasLoadedHistory = useRef(false);
  const hasLoadedMessages = useRef<Set<number>>(new Set());

  // Initialize chat history for the student
  useEffect(() => {
    if (studentId && !hasLoadedHistory.current) {
      loadChatHistory(studentId);
      hasLoadedHistory.current = true;
    }
  }, [studentId]);

  // Load messages when chat changes
  useEffect(() => {
    console.log("Current Chat ID in usemessages:", state.currentChatId);
    if (state.currentChatId && !hasLoadedMessages.current.has(state.currentChatId)) {
      loadChatMessages(state.currentChatId);
      hasLoadedMessages.current.add(state.currentChatId);
    }
  }, [state.currentChatId]);

  const loadChatHistory = async (studentId: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Simulate API call - replace with real API
      const mockChatHistory: ChatHistoryItem[] = [
        { 
          id: 1, 
          title: 'Document analysis study on IS Report', 
          lastMessage: '2 hours ago',
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          messageCount: getMessageCount(1),
          studentId: studentId
        },
        { 
          id: 2, 
          title: 'Research on AI in education Report', 
          lastMessage: '1 day ago',
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          messageCount: getMessageCount(2),
          studentId: studentId
        },
        { 
          id: 3, 
          title: 'Ask anything about IS Report...', 
          lastMessage: '3 days ago',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          messageCount: getMessageCount(3),
          studentId: studentId
        },
      ];

      setState(prev => ({
        ...prev,
        chatHistory: mockChatHistory,
        isLoading: false
      }));
    } catch (error) {
      console.error('Failed to load chat history:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const loadChatMessages = async (chatId: number) => {
    // Don't reload if messages already exist
    if (state.messagesByChat[chatId]) return;

    setState(prev => ({ ...prev, isLoading: true }));

    try {
      // Get dummy messages for existing chats, or create welcome message for new chats
      const existingMessages = dummyChatMessages[chatId];
      const messagesToLoad = existingMessages || [
        {
          id: 1,
          type: 'bot' as const,
          content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
          timestamp: new Date(Date.now() - 5000),
          chatId: chatId
        }
      ];

      setState(prev => ({
        ...prev,
        messagesByChat: {
          ...prev.messagesByChat,
          [chatId]: messagesToLoad
        },
        isLoading: false
      }));
    } catch (error) {
      console.error('Failed to load chat messages:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const createNewChat = useCallback(async (studentId: string): Promise<number> => {
    const newChatId = Date.now(); // In real app, this would come from API
    const newChat: ChatHistoryItem = {
      id: newChatId,
      title: 'New Chat',
      lastMessage: 'Just now',
      createdAt: new Date(),
      messageCount: 0,
      studentId: studentId
    };

    // Add welcome message for new chat
    const welcomeMessage: Message = {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(),
      chatId: newChatId
    };

    setState(prev => ({
      ...prev,
      currentChatId: newChatId,
      chatHistory: [newChat, ...prev.chatHistory],
      messagesByChat: {
        ...prev.messagesByChat,
        [newChatId]: [welcomeMessage]
      }
    }));

    // Mark as loaded to prevent re-loading
    hasLoadedMessages.current.add(newChatId);

    return newChatId;
  }, []);

  const switchToChat = useCallback((chatId: number) => {
    // Only switch if it's a different chat
    setState(prev => {
      if (prev.currentChatId === chatId) {
        return prev; // No change needed
      }
      return {
        ...prev,
        currentChatId: chatId
      };
    });
    
    // Messages will be loaded by the useEffect
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || !state.currentChatId) return;

    const userMessage: Message = {
      id: Date.now() + Math.random(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
      chatId: state.currentChatId
    };

    // Add user message immediately
    setState(prev => ({
      ...prev,
      messagesByChat: {
        ...prev.messagesByChat,
        [state.currentChatId!]: [
          ...(prev.messagesByChat[state.currentChatId!] || []),
          userMessage
        ]
      },
      isTyping: true
    }));

    // Update chat history with new last message
    setState(prev => ({
      ...prev,
      chatHistory: prev.chatHistory.map(chat => 
        chat.id === state.currentChatId 
          ? { 
              ...chat, 
              lastMessage: 'Just now',
              messageCount: chat.messageCount + 1,
              title: chat.title === 'New Chat' ? generateChatTitle(content) : chat.title
            }
          : chat
      )
    }));

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const botMessage: Message = {
        id: Date.now() + Math.random(),
        type: 'bot',
        content: "I understand your question. Let me help you analyze this topic in detail. Based on the research papers and academic sources, here are some key insights...",
        timestamp: new Date(),
        chatId: state.currentChatId
      };

      setState(prev => ({
        ...prev,
        messagesByChat: {
          ...prev.messagesByChat,
          [state.currentChatId!]: [
            ...(prev.messagesByChat[state.currentChatId!] || []),
            botMessage
          ]
        },
        isTyping: false
      }));

      // Update chat history with bot response
      setState(prev => ({
        ...prev,
        chatHistory: prev.chatHistory.map(chat => 
          chat.id === state.currentChatId 
            ? { ...chat, messageCount: chat.messageCount + 1 }
            : chat
        )
      }));

    } catch (error) {
      console.error('Failed to send message:', error);
      setState(prev => ({ ...prev, isTyping: false }));
    }
  }, [state.currentChatId]);

  const deleteChat = useCallback((chatId: number) => {
    setState(prev => {
      // Create a shallow copy and remove the chatId key
      const { [chatId]: _, ...restMessagesByChat } = prev.messagesByChat;
      return {
        ...prev,
        chatHistory: prev.chatHistory.filter(chat => chat.id !== chatId),
        messagesByChat: restMessagesByChat,
        currentChatId: prev.currentChatId === chatId ? null : prev.currentChatId
      };
    });

    // Remove from loaded messages set
    hasLoadedMessages.current.delete(chatId);
  }, []);

  const clearCurrentChat = useCallback(() => {
    if (!state.currentChatId) return;
    
    setState(prev => ({
      ...prev,
      messagesByChat: {
        ...prev.messagesByChat,
        [state.currentChatId!]: []
      }
    }));
  }, [state.currentChatId]);

  const updateChatTitle = useCallback((chatId: number, title: string) => {
    setState(prev => ({
      ...prev,
      chatHistory: prev.chatHistory.map(chat => 
        chat.id === chatId ? { ...chat, title } : chat
      )
    }));
  }, []);

  // Helper function to generate chat title from first message
  const generateChatTitle = (firstMessage: string): string => {
    const words = firstMessage.trim().split(' ');
    const title = words.slice(0, 6).join(' ');
    return title.length > 40 ? title.substring(0, 40) + '...' : title;
  };

  // Get current chat messages
  const currentMessages = state.currentChatId 
    ? state.messagesByChat[state.currentChatId] || []
    : [];

  // Get current chat title
  const currentChatTitle = state.currentChatId
    ? state.chatHistory.find(chat => chat.id === state.currentChatId)?.title || 'New Chat'
    : 'New Chat';

  return {
    // State
    messages: currentMessages,
    chatHistory: state.chatHistory,
    currentChatId: state.currentChatId,
    isTyping: state.isTyping,
    isLoading: state.isLoading,
    currentChatTitle,
    
    // Actions - all memoized with useCallback
    sendMessage,
    createNewChat,
    switchToChat,
    deleteChat,
    clearCurrentChat,
    updateChatTitle,
    loadChatHistory,
  };
};