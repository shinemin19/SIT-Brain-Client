// ChatPage.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/shared/NavBar';
import ChatMain from '../components/chat/ChatMain';
import ChatSidebar from '../components/chat/ChatSidebar';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import type { UserData } from '../types/chat.types';
import { useChatMessages } from '../hooks/useChatMessages';

// interface ChatPageParams {
//   studentId: string;
//   chatId?: string;
// }

const ChatPage: React.FC = () => {
  const { studentId, chatId } = useParams();
  const navigate = useNavigate();
  const [hasInitialized, setHasInitialized] = useState(false);

  // Parse chatId from URL params
  const parsedChatId = chatId ? parseInt(chatId, 10) : null;
  const {
    messages,
    chatHistory,
    currentChatId,
    isTyping,
    isLoading,
    currentChatTitle,
    sendMessage,
    createNewChat,
    switchToChat,
    deleteChat,
    clearCurrentChat,
    updateChatTitle,
  } = useChatMessages(studentId!, parsedChatId);

  // Mock user data - in real app, this would come from auth context
  const userData: UserData = {
    name: 'John Doe',
    studentId: studentId!
  };

  // Memoized navigation handlers to prevent infinite loops
  const handleNewChat = useCallback(async () => {
    if (!studentId) return;
    const newChatId = await createNewChat(studentId);
    navigate(`/chat/${studentId}/${newChatId}`);
  }, [studentId, createNewChat, navigate]);

  const handleChatSelect = useCallback((chatId: number) => {
    if (!studentId) return;
    navigate(`/chat/${studentId}/${chatId}`);
  }, [studentId, navigate]);

  const handleChatDelete = useCallback((chatId: number) => {
    deleteChat(chatId);
    
    // If we deleted the current chat, redirect to new chat
    if (chatId === currentChatId) {
      handleNewChat();
    }
  }, [deleteChat, currentChatId, handleNewChat]);

  const handleUpdateChatTitle = useCallback((chatId: number, title: string) => {
    updateChatTitle(chatId, title);
  }, [updateChatTitle]);

  // Handle initial routing logic - only run once
  useEffect(() => {
    const initializeChat = async () => {
      if (!studentId) {
        navigate('/signin');
        return;
      }

      if (!hasInitialized) {
        setHasInitialized(true);

        // If no chatId in URL, create new chat and redirect
        if (!parsedChatId) {
          try {
            const newChatId = await createNewChat(studentId);
            navigate(`/chat/${studentId}/${newChatId}`, { replace: true });
          } catch (error) {
            console.error('Failed to create new chat:', error);
          }
        } else {
          // For existing chatId, just switch to it
          switchToChat(parsedChatId);
        }
      }
    };

    initializeChat();
  }, [studentId, parsedChatId, hasInitialized, createNewChat, switchToChat, navigate]);

  // Separate effect for URL synchronization when currentChatId changes internally
  useEffect(() => {
    if (hasInitialized && currentChatId && currentChatId !== parsedChatId && studentId) {
      navigate(`/chat/${studentId}/${currentChatId}`, { replace: true });
    }
  }, [currentChatId, parsedChatId, studentId, navigate, hasInitialized]);

  // Show loading while initializing
  if (!hasInitialized || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading chat..." />
      </div>
    );
  }

  // Show error if no studentId
  if (!studentId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Invalid Access</h2>
          <p className="text-gray-600">Student ID is required to access the chat.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <NavBar 
        isLoggedIn={true} 
        currentPage="chat" 
        userData={userData} 
      />

      <ChatSidebar
        chatHistory={chatHistory}
        userData={userData}
        selectedChatId={currentChatId}
        onNewChat={handleNewChat}
        onChatSelect={handleChatSelect}
        onChatDelete={handleChatDelete}
      />

      <ChatMain
        messages={messages}
        isTyping={isTyping}
        chatTitle={currentChatTitle}
        chatId={currentChatId}
        onSendMessage={sendMessage}
        onUpdateChatTitle={handleUpdateChatTitle}
        onClearChat={clearCurrentChat}
      />
    </div>
  );
};

export default ChatPage;