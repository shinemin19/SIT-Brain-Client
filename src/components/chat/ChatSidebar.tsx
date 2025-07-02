// components/ChatSidebar.tsx
import React from 'react';
import { Plus, User } from 'lucide-react';
import type { ChatSidebarProps } from '../../types/chat.types';
import ChatHistoryItem from './ChatHistoryItem';

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chatHistory,
  userData,
  selectedChatId,
  onNewChat,
  onChatSelect,
  onChatDelete
}) => {
    console.log("Selected Chat ID:", selectedChatId);
  return (
    <div className="fixed left-0 top-16 bottom-0 w-80 bg-slate-800 border-r border-gray-700 flex flex-col">
      {/* New Chat Button */}
      <div className="p-4 border-b border-gray-700">
        <button 
          onClick={onNewChat}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-cyan-400 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-gray-300 text-sm font-medium mb-3 uppercase tracking-wide">
            Recent Chats
          </h3>
          {chatHistory.length > 0 ? (
            <div className="space-y-2">
              {chatHistory.map((chat) => (
                <ChatHistoryItem
                  key={chat.id}
                  chat={chat}
                  isSelected={selectedChatId === chat.id}
                  onSelect={() => onChatSelect(chat.id)}
                  onDelete={() => onChatDelete(chat.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">No chat history yet</p>
              <p className="text-gray-500 text-xs mt-1">Start a new conversation to get started</p>
            </div>
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">{userData.name}</p>
            <p className="text-gray-400 text-xs truncate">
              Student ID: {userData.studentId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;