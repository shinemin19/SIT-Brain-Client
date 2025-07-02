// data/dummyChatMessages.ts
import type { Message } from '../types/chat.types';

export const dummyChatMessages: Record<number, Message[]> = {
  // Chat 1: Document analysis study on IS Report
  1: [
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      chatId: 1
    },
    {
      id: 2,
      type: 'user',
      content: "I need help analyzing the structure of my IS Report. Can you help me understand the key components I should include?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 - 30 * 60 * 1000), // 2.5 hours ago
      chatId: 1
    },
    {
      id: 3,
      type: 'bot',
      content: "Absolutely! An effective IS Report typically includes: 1) Executive Summary, 2) Introduction & Problem Statement, 3) Literature Review, 4) Methodology, 5) System Analysis & Design, 6) Implementation Details, 7) Testing & Evaluation, 8) Conclusions & Recommendations. Would you like me to elaborate on any specific section?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 - 25 * 60 * 1000), // 2h 25m ago
      chatId: 1
    },
    {
      id: 4,
      type: 'user',
      content: "Yes, can you help me with the methodology section? I'm not sure how to structure it properly.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      chatId: 1
    },
    {
      id: 5,
      type: 'bot',
      content: "The methodology section should outline your research approach and development process. Include: 1) Research methods (surveys, interviews, observations), 2) Development methodology (Agile, Waterfall, etc.), 3) Tools and technologies used, 4) Data collection methods, 5) Analysis techniques. Make sure to justify why you chose each approach for your specific project.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 + 2 * 60 * 1000), // 1h 58m ago
      chatId: 1
    }
  ],

  // Chat 2: Research on AI in education Report
  2: [
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
      chatId: 2
    },
    {
      id: 2,
      type: 'user',
      content: "I'm working on a research paper about AI in education. Can you help me find some current trends and applications?",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000 - 30 * 60 * 1000), // 24.5 hours ago
      chatId: 2
    },
    {
      id: 3,
      type: 'bot',
      content: "Great topic! Current AI trends in education include: 1) Personalized Learning Systems that adapt to individual student needs, 2) Intelligent Tutoring Systems (ITS), 3) Automated Essay Scoring, 4) Chatbots for student support, 5) Predictive Analytics for student performance, 6) Virtual Reality for immersive learning. Which area interests you most?",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000 - 25 * 60 * 1000), // 24h 25m ago
      chatId: 2
    },
    {
      id: 4,
      type: 'user',
      content: "Personalized learning systems sound fascinating. Can you elaborate on how they work and their impact on student outcomes?",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
      chatId: 2
    },
    {
      id: 5,
      type: 'bot',
      content: "Personalized learning systems use machine learning algorithms to analyze student behavior, learning patterns, and performance data. They adapt content difficulty, presentation style, and pacing in real-time. Research shows 20-30% improvement in learning outcomes, increased engagement, and better retention rates. Key examples include Khan Academy's adaptive exercises and Carnegie Learning's cognitive tutoring systems.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000 + 5 * 60 * 1000), // 23h 55m ago
      chatId: 2
    }
  ],

  // Chat 3: Ask anything about IS Report...
  3: [
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm SITBRAIN, your AI research assistant. How can I help you with your academic work today?",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
      chatId: 3
    },
    {
      id: 2,
      type: 'user',
      content: "What are the common mistakes students make in their IS reports that I should avoid?",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 23 * 60 * 60 * 1000), // 3 days 23 hours ago
      chatId: 3
    },
    {
      id: 3,
      type: 'bot',
      content: "Common IS report mistakes include: 1) Weak problem definition - not clearly stating what issue you're solving, 2) Insufficient literature review - missing key related work, 3) Poor system design documentation - lacking UML diagrams or flowcharts, 4) No proper testing documentation, 5) Weak evaluation metrics, 6) Missing implementation details, 7) Poor formatting and referencing. Focus on clear documentation and thorough testing!",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 22 * 60 * 60 * 1000), // 3d 22h ago
      chatId: 3
    },
    {
      id: 4,
      type: 'user',
      content: "How should I document my testing process? I have done manual testing but not sure how to present it professionally.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 20 * 60 * 60 * 1000), // 3d 20h ago
      chatId: 3
    },
    {
      id: 5,
      type: 'bot',
      content: "For professional testing documentation, include: 1) Test Plan with objectives and scope, 2) Test Cases with step-by-step procedures, expected vs actual results, 3) Test Data used, 4) Screenshots of test execution, 5) Bug/Issue tracking with severity levels, 6) Test Summary Report with pass/fail statistics, 7) User Acceptance Testing feedback. Use tables for test cases and include both positive and negative test scenarios.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 19 * 60 * 60 * 1000), // 3d 19h ago
      chatId: 3
    },
    {
      id: 6,
      type: 'user',
      content: "Perfect! This gives me a clear structure to follow. Thank you for the detailed guidance.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 18 * 60 * 60 * 1000), // 3d 18h ago
      chatId: 3
    },
    {
      id: 7,
      type: 'bot',
      content: "You're welcome! Remember to also include performance testing if applicable, and consider automated testing tools for future projects. Good luck with your IS report - feel free to ask if you need help with any other sections!",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 17 * 60 * 60 * 1000 - 30 * 60 * 1000), // 3d 17h 30m ago
      chatId: 3
    },
    {
      id: 8,
      type: 'user',
      content: "One last question - should I include code snippets in the appendix or in the main body?",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      chatId: 3
    },
    {
      id: 9,
      type: 'bot',
      content: "Great question! Include key code snippets (algorithms, core functions) in the main body with explanations. Put complete source code, configuration files, and database schemas in the appendix. This keeps the main report readable while providing complete technical details for reference. Use proper code formatting and syntax highlighting when possible.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 + 5 * 60 * 1000), // 2d 23h 55m ago
      chatId: 3
    }
  ]
};

// Helper function to get messages for a specific chat
export const getChatMessages = (chatId: number): Message[] => {
  return dummyChatMessages[chatId] || [];
};

// Helper function to get the latest message for a chat
export const getLatestMessage = (chatId: number): Message | null => {
  const messages = getChatMessages(chatId);
  return messages.length > 0 ? messages[messages.length - 1] : null;
};

// Helper function to get message count for a chat
export const getMessageCount = (chatId: number): number => {
  return getChatMessages(chatId).length;
};