// ChatPage.tsx
import React, { useState } from 'react';
import NavBar from '../components/shared/NavBar';
import ChatMain from '../components/chat/ChatMain';
import ChatSidebar from '../components/chat/ChatSidebar';
import type { ChatHistoryItem } from '../types/chat.types';
import { useChatMessages } from '../hooks/useChatMessages';

const ChatPage: React.FC = () => {
  const {
    messages,
    isTyping,
    sendMessage,
    addMessage
  } = useChatMessages();

  const [chatHistory] = useState<ChatHistoryItem[]>([
    { 
      id: 1, 
      title: 'การศึกษาเชิงวิเคราะห์เอกสาร...', 
      lastMessage: '2 hours ago',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    { 
      id: 2, 
      title: 'การวิจัยเกี่ยวกับ...', 
      lastMessage: '1 day ago',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    { 
      id: 3, 
      title: 'Ask anything about IS Report...', 
      lastMessage: '3 days ago',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
  ]);

  const userData = {
    name: 'John Doe',
    studentId: '12345678900'
  };

  const handleNewChat = () => {
    // Logic for creating a new chat
    console.log('Creating new chat...');
  };

  const handleChatSelect = (chatId: number) => {
    // Logic for selecting a chat
    console.log('Selecting chat:', chatId);
  };

  const handleChatDelete = (chatId: number) => {
    // Logic for deleting a chat
    console.log('Deleting chat:', chatId);
  };

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
        onNewChat={handleNewChat}
        onChatSelect={handleChatSelect}
        onChatDelete={handleChatDelete}
      />

      <ChatMain
        messages={messages}
        isTyping={isTyping}
        onSendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatPage;