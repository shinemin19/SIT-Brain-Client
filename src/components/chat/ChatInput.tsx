// components/ChatInput.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import type { ChatInputProps } from '../../types/chat.types';

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  disabled = false 
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim() || disabled) return;
    
    onSendMessage(inputMessage);
    setInputMessage('');
    
    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
    
    // Auto-resize textarea
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
  };

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const isDisabled = disabled || !inputMessage.trim();

  return (
    <div className="relative flex items-center justify-center gap-3">
      {/* Message Input */}
      <div className="flex-1 relative">
        <textarea
          ref={inputRef}
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask anything about IS Report..."
          disabled={disabled}
          className="w-full max-h-32 p-4 pr-4 border border-gray-300 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm text-gray-800 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          rows={1}
          style={{ minHeight: '56px' }}
        />
      </div>

      {/* Send Button */}
      <button
        onClick={handleSendMessage}
        disabled={isDisabled}
        className="p-3 bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-cyan-400 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex-shrink-0"
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatInput;