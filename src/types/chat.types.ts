// types/chat.types.ts
export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  chatId: number; // Link message to specific chat
}

export interface ChatHistoryItem {
  id: number;
  title: string;
  lastMessage: string;
  createdAt: Date;
  messageCount: number;
  studentId: string; // Link chat to specific student
}

export interface UserData {
  name: string;
  studentId: string;
}

export interface ChatSidebarProps {
  chatHistory: ChatHistoryItem[];
  userData: UserData;
  selectedChatId: number | null;
  onNewChat: () => void;
  onChatSelect: (chatId: number) => void;
  onChatDelete: (chatId: number) => void;
}

export interface ChatMainProps {
  messages: Message[];
  isTyping: boolean;
  chatTitle: string;
  chatId: number | null;
  onSendMessage: (message: string) => void;
  onUpdateChatTitle: (chatId: number, title: string) => void;
  onClearChat: () => void;
}

export interface MessageBubbleProps {
  message: Message;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

// New interfaces for routing and state management
export interface ChatRoute {
  studentId: string;
  chatId: number | null;
}

export interface ChatState {
  currentChatId: number | null;
  chatHistory: ChatHistoryItem[];
  messagesByChat: Record<number, Message[]>;
  isTyping: boolean;
  isLoading: boolean;
}

export interface CreateChatParams {
  studentId: string;
  title?: string;
}