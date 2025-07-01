import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, MessageCircle, Bot, User, Paperclip, Mic, MoreVertical, Trash2, Edit3 } from 'lucide-react';
import NavBar from '../components/shared/NavBar';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(Date.now() - 5000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [chatHistory] = useState([
    { id: 1, title: 'การศึกษาเชิงวิเคราะห์เอกสาร...', lastMessage: '2 hours ago' },
    { id: 2, title: 'การวิจัยเกี่ยวกับ...', lastMessage: '1 day ago' },
    { id: 3, title: 'Ask anything about IS Report...', lastMessage: '3 days ago' },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: "I understand your question. Let me help you analyze this topic in detail. Based on the research papers and academic sources, here are some key insights...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navbar Placeholder */}
      <NavBar isLoggedIn={true} currentPage="chat" userData={{ name: 'John Doe', studentId: '12345678900' }} />

      {/* Sidebar */}
      <div className="fixed left-0 top-14 bottom-0 w-80 bg-slate-800 border-r border-gray-700 flex flex-col">
        {/* New Chat Button */}
        <div className="p-4 border-b border-gray-700">
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-cyan-400 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-gray-300 text-sm font-medium mb-3 uppercase tracking-wide">Recent Chats</h3>
            <div className="space-y-2">
              {chatHistory.map((chat) => (
                <div key={chat.id} className="group relative bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 cursor-pointer transition-all duration-200 border border-transparent hover:border-slate-600">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <h4 className="text-white text-sm font-medium truncate">{chat.title}</h4>
                      </div>
                      <p className="text-gray-400 text-xs">{chat.lastMessage}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-600 rounded transition-all duration-200">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
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
              <p className="text-white text-sm font-medium">John Doe</p>
              <p className="text-gray-400 text-xs truncate">Student ID: 12345678900</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 ml-80 flex flex-col">
        {/* Chat Header */}
        <div className="mt-20 bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">SITBRAIN Assistant</h2>
                <p className="text-sm text-gray-500">AI Research & Writing Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit3 className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type === 'bot' && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-2xl ${message.type === 'user' ? 'order-first' : ''}`}>
                <div className={`p-4 rounded-2xl shadow-sm ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-300 text-white ml-auto' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <p className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                    {message.content}
                  </p>
                </div>
                <p className={`text-xs text-gray-500 mt-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>

              {message.type === 'user' && (
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center gap-3">
              {/* File Upload
              <button className="p-3 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200 flex-shrink-0">
                <Paperclip className="w-5 h-5" />
              </button> */}

              {/* Message Input */}
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything about IS Report..."
                  className="w-full max-h-32 p-4 pr-12 border border-gray-300 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm text-gray-800 placeholder-gray-500"
                  rows={1}
                />
              </div>

              {/* Voice Input
              <button className="p-3 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200 flex-shrink-0">
                <Mic className="w-5 h-5" />
              </button> */}

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-cyan-400 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Input Helper Text */}
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;