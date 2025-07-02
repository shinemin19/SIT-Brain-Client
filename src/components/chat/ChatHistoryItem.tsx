// components/ChatHistoryItem.tsx
import React from 'react';
import { MessageCircle, MoreVertical } from 'lucide-react';
import type { ChatHistoryItem as ChatHistoryItemType } from '../../types/chat.types';

interface ChatHistoryItemProps {
  chat: ChatHistoryItemType;
  onSelect: () => void;
  onDelete: () => void;
}

const ChatHistoryItem: React.FC<ChatHistoryItemProps> = ({
  chat,
  onSelect,
  onDelete
}) => {
  const handleMoreOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    // You can implement a dropdown menu here
    onDelete();
  };

  return (
    <div 
      onClick={onSelect}
      className="group relative bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-600"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <MessageCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <h4 className="text-white text-sm font-medium truncate">
              {chat.title}
            </h4>
          </div>
          <p className="text-gray-400 text-xs">{chat.lastMessage}</p>
        </div>
        <button 
          onClick={handleMoreOptions}
          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-600 rounded transition-all duration-200"
        >
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ChatHistoryItem;