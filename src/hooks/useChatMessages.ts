// hooks/useChatMessages.ts
import { useState, useCallback } from 'react';
import type { Message } from '../types/chat.types';

export const useChatMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(Date.now() - 5000)
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now() + Math.random(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    addMessage({
      type: 'user',
      content: content.trim()
    });

    setIsTyping(true);

    // Simulate bot response
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      addMessage({
        type: 'bot',
        content: "I understand your question. Let me help you analyze this topic in detail. Based on the research papers and academic sources, here are some key insights..."
      });
    } catch (error) {
      addMessage({
        type: 'bot',
        content: "I apologize, but I encountered an error processing your request. Please try again."
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    addMessage,
    clearMessages
  };
};