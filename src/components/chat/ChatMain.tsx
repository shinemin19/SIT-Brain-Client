// components/ChatMain.tsx
import React, { useRef, useEffect } from 'react';
import { Bot, Edit3, Trash2 } from 'lucide-react';
import type { ChatMainProps } from '../../types/chat.types';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';

const ChatMain: React.FC<ChatMainProps> = ({
  messages,
  isTyping,
  onSendMessage
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleClearChat = () => {
    // Implement clear chat functionality
    console.log('Clearing chat...');
  };

  const handleEditChat = () => {
    // Implement edit chat functionality
    console.log('Editing chat...');
  };

  return (
    <div className="flex-1 mt-20 ml-80 flex flex-col">
      {/* Fixed Chat Header */}
      <div className="fixed top-14 left-80 right-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                SITBRAIN Assistant
              </h2>
              <p className="text-sm text-gray-500">
                AI Research & Writing Assistant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleEditChat}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Edit chat"
            >
              <Edit3 className="w-4 h-4 text-gray-500" />
            </button>
            <button 
              onClick={handleClearChat}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Clear chat"
            >
              <Trash2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area - with proper spacing for fixed header and input */}
      <div className="flex-1 overflow-y-auto pt-20 pb-32 px-6 space-y-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 left-80 right-0 border-t border-gray-200 bg-white p-4 z-10">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={onSendMessage} />
          
          {/* Input Helper Text */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;