// components/ChatHistoryItem.tsx
import React from 'react';
import { MessageCircle, Trash2 } from 'lucide-react';
import type { ChatHistoryItem as ChatHistoryItemType } from '../../types/chat.types';

interface ChatHistoryItemProps {
  chat: ChatHistoryItemType;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const ChatHistoryItem: React.FC<ChatHistoryItemProps> = ({
  chat,
  isSelected,
  onSelect,
  onDelete
}) => {
  const handleMoreOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    // For now, just delete. You can implement a dropdown menu here
    if (window.confirm(`Are you sure you want to delete "${chat.title}"?`)) {
      onDelete();
    }
  };

  return (
    <div 
      onClick={onSelect}
      className={`group relative rounded-lg p-3 cursor-pointer transition-all duration-200 border ${
        isSelected 
          ? 'bg-slate-700 border-blue-500/50 shadow-lg' 
          : 'bg-slate-700/50 hover:bg-slate-700 border-transparent hover:border-slate-600'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <MessageCircle className={`w-4 h-4 flex-shrink-0 ${
              isSelected ? 'text-blue-300' : 'text-blue-400'
            }`} />
            <h4 className={`text-sm font-medium truncate ${
              isSelected ? 'text-blue-100' : 'text-white'
            }`}>
              {chat.title}
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-xs">{chat.lastMessage}</p>
            <span className="text-gray-500 text-xs ml-2">
              {chat.messageCount} msg{chat.messageCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <button 
          onClick={handleMoreOptions}
          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-600 rounded transition-all duration-200 ml-2"
          title="Delete chat"
        >
          <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
        </button>
      </div>
      
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r"></div>
      )}
    </div>
  );
};

export default ChatHistoryItem;