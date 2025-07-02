// constants/chatConstants.ts
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 4000,
  TYPING_DELAY: 2000,
  AUTO_SCROLL_BEHAVIOR: 'smooth' as ScrollBehavior,
  MAX_INPUT_HEIGHT: 128,
  MIN_INPUT_HEIGHT: 56,
} as const;

export const UI_CONSTANTS = {
  SIDEBAR_WIDTH: 320,
  NAVBAR_HEIGHT: 56,
  CHAT_HEADER_HEIGHT: 88, // Height of the SITBRAIN assistant header
  CHAT_INPUT_HEIGHT: 120, // Height of the input area including padding
  MESSAGE_MAX_WIDTH: 672, // max-w-2xl
  ANIMATION_DURATION: 200,
} as const;

export const PLACEHOLDER_MESSAGES = {
  INPUT: 'Ask anything about IS Report...',
  EMPTY_CHAT: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
  ERROR: "I apologize, but I encountered an error processing your request. Please try again.",
  TYPING: "AI is typing...",
} as const;

export const ARIA_LABELS = {
  SEND_MESSAGE: 'Send message',
  NEW_CHAT: 'Create new chat',
  DELETE_CHAT: 'Delete chat',
  EDIT_CHAT: 'Edit chat',
  CLEAR_CHAT: 'Clear chat',
  MORE_OPTIONS: 'More options',
  USER_AVATAR: 'User avatar',
  BOT_AVATAR: 'AI assistant avatar',
} as const;