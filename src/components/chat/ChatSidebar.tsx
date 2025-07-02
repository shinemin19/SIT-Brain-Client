import React from 'react';
import { Plus, User } from 'lucide-react';
import ChatHistoryItem from './ChatHistoryItem';
import type { ChatSidebarProps } from '../../types/chat.types';

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chatHistory,
  userData,
  onNewChat,
  onChatSelect,
  onChatDelete
}) => {
  return (
    <div className="fixed left-0 top-14 bottom-0 w-80 bg-slate-800 border-r border-gray-700 flex flex-col">
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
          <div className="space-y-2">
            {chatHistory.map((chat) => (
              <ChatHistoryItem
                key={chat.id}
                chat={chat}
                onSelect={() => onChatSelect(chat.id)}
                onDelete={() => onChatDelete(chat.id)}
              />
            ))}
          </div>
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