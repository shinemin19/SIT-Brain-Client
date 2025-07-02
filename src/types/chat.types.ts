export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatHistoryItem {
  id: number;
  title: string;
  lastMessage: string;
  createdAt: Date;
}

export interface UserData {
  name: string;
  studentId: string;
}

export interface ChatSidebarProps {
  chatHistory: ChatHistoryItem[];
  userData: UserData;
  onNewChat: () => void;
  onChatSelect: (chatId: number) => void;
  onChatDelete: (chatId: number) => void;
}

export interface ChatMainProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
}

export interface MessageBubbleProps {
  message: Message;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}