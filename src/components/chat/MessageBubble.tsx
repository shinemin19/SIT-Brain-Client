// components/MessageBubble.tsx
import React from 'react';
import { Bot, User } from 'lucide-react';
import type { MessageBubbleProps } from '../../types/chat.types';
import { formatTime } from '../../utils/dateUtils';

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-2xl ${isUser ? 'order-first' : ''}`}>
        <div className={`p-4 rounded-2xl shadow-sm ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-blue-300 text-white ml-auto' 
            : 'bg-white border border-gray-200'
        }`}>
          <p className={`text-sm leading-relaxed ${
            isUser ? 'text-white' : 'text-gray-800'
          }`}>
            {message.content}
          </p>
        </div>
        <p className={`text-xs text-gray-500 mt-2 ${
          isUser ? 'text-right' : 'text-left'
        }`}>
          {formatTime(message.timestamp)}
        </p>
      </div>

      {isUser && (
        <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;