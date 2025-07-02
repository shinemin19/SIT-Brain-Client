// components/ChatMain.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Bot, Edit3, Trash2, Check, X } from 'lucide-react';
import type { ChatMainProps } from '../../types/chat.types';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';

const ChatMain: React.FC<ChatMainProps> = ({
  messages,
  isTyping,
  chatTitle,
  chatId,
  onSendMessage,
  onUpdateChatTitle,
  onClearChat,
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(chatTitle);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    setEditedTitle(chatTitle);
  }, [chatTitle]);

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear this chat? This action cannot be undone.')) {
      onClearChat();
    }
  };

  const handleEditTitle = () => {
    setIsEditingTitle(true);
  };

  const handleSaveTitle = () => {
    if (chatId && editedTitle.trim() && editedTitle !== chatTitle) {
      onUpdateChatTitle(chatId, editedTitle.trim());
    }
    setIsEditingTitle(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(chatTitle);
    setIsEditingTitle(false);
  };

  const handleTitleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveTitle();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className="flex-1 mt-20 ml-80 flex flex-col">
      {/* Fixed Chat Header */}
      <div className="fixed top-16 left-80 right-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              {isEditingTitle ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onKeyDown={handleTitleKeyPress}
                    onBlur={handleSaveTitle}
                    className="text-lg font-semibold text-gray-900 bg-transparent border-b border-blue-500 focus:outline-none flex-1 min-w-0"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveTitle}
                    className="p-1 text-green-600 hover:bg-green-50 rounded"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <h2 
                  className="text-lg font-semibold text-gray-900 truncate cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={handleEditTitle}
                  title="Click to edit title"
                >
                  {chatTitle}
                </h2>
              )}
              <p className="text-sm text-gray-500">
                AI Research & Writing Assistant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleEditTitle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Edit chat title"
              title="Edit chat title"
            >
              <Edit3 className="w-4 h-4 text-gray-500" />
            </button>
            <button 
              onClick={handleClearChat}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area - with proper spacing for fixed header and input */}
      <div className="flex-1 overflow-y-auto pt-20 pb-32 px-6 space-y-6">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start a new conversation
              </h3>
              <p className="text-gray-600 max-w-md">
                Ask me anything about your IS Report or any academic research. I'm here to help!
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {isTyping && <TypingIndicator />}
          </>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 left-80 right-0 border-t border-gray-200 bg-white p-4 z-10">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
          
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