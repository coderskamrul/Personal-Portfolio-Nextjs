'use client'

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Maximize2, Minimize2, Moon, Sun } from 'lucide-react';
import ChatBootData from './ChatBootData.json';


// Convert string patterns to RegExp objects
const responsePatterns = ChatBootData.map(patternObj => ({
    ...patternObj,
    patterns: patternObj.patterns.map(pattern => new RegExp(pattern, 'i'))
  }));

// Store chat history in localStorage
const STORAGE_KEY = 'portfolio-chat-history';
const THEME_KEY = 'dark';

// Enhanced response mapping with regex patterns
// const responsePatterns = [
//   {
//     patterns: [
//       /\b(hi|hello|hey)\b/i,
//       /\bhow are you\b/i,
//       /\bgreetings\b/i
//     ],
//     response: "Hello! I'm an AI assistant for Md. Kamrul Hasan. How can I help you today?"
//   },
//   {
//     patterns: [
//       /\bname\b/i,
//       /who (are|is) (you|kamrul)/i,
//       /\bfull name\b/i
//     ],
//     response: "My name is Md. Kamrul Hasan."
//   },
//   {
//     patterns: [
//       /\bage\b/i,
//       /\bhow old\b/i,
//       /\bborn\b/i
//     ],
//     response: "I'm a young professional software engineer."
//   },
//   {
//     patterns: [
//       /\bemail\b/i,
//       /\bcontact\b/i,
//       /\breach\b/i
//     ],
//     response: "You can reach me at mdkamrul2058@gmail.com or +880 1635499809."
//   },
//   {
//     patterns: [
//       /\blocation\b/i,
//       /\bwhere.*from\b/i,
//       /\bcountry\b/i,
//       /\bcity\b/i
//     ],
//     response: "I'm from Dhaka, Bangladesh."
//   },
//   {
//     patterns: [
//       /\beducation\b/i,
//       /\bstudy\b/i,
//       /\bdegree\b/i,
//       /\bcgpa\b/i,
//       /\buniversity\b/i
//     ],
//     response: "I have a B.Sc. in Computer Science & Engineering from IUBAT with a CGPA of 3.55 out of 4.00."
//   },
//   {
//     patterns: [
//       /\bexperience\b/i,
//       /\bwork\b/i,
//       /\bjob\b/i,
//       /\bcareer\b/i
//     ],
//     response: "I'm a Software Engineer at WPXPO with 1.7+ years of experience, focusing on full-stack development and AI-based solutions."
//   },
//   {
//     patterns: [
//       /\bskills?\b/i,
//       /\btechnolog(y|ies)\b/i,
//       /what.*know/i,
//       /\bstack\b/i
//     ],
//     response: "I'm skilled in:\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Express\n• Databases: MongoDB, MySQL\n• Languages: JavaScript, Python, C++\n• Tools: Git, Docker, AWS"
//   },
//   {
//     patterns: [
//       /\bachievements?\b/i,
//       /\bawards?\b/i,
//       /\baccomplishments?\b/i
//     ],
//     response: "My notable achievements include:\n• ICPC Asia West Finalist\n• 1st Runner-Up in multiple programming contests\n• 1500+ problems solved across platforms\n• Codeforces rating: 1325\n• Codechef: 3★ (rating 1627)"
//   },
//   {
//     patterns: [
//       /\bprojects?\b/i,
//       /\bportfolio\b/i,
//       /\bbuilt\b/i,
//       /\bcreated\b/i
//     ],
//     response: "I've worked on several projects including:\n• React Organizational Service Provider\n• Task Manager with JWT\n• Coffee Shop Website\n• GFP-GAN Image Reconstruction Research"
//   }
//   // Add more patterns based on the provided Q&A dataset
// ];

// Portfolio data based on your CV
const portfolioData = {
  // ... (previous portfolio data remains the same)
};

const TypingAnimation = ({ text, shouldType }: { text: string; shouldType: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!shouldType) {
      setDisplayText(text);
      return;
    }

    let index = 0;
    setIsTyping(true);
    
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, shouldType]);

  return (
    <div className="relative">
      {displayText}
      {isTyping && (
        <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse" />
      )}
    </div>
  );
};

const PortfolioAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_KEY);
        return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      });
  const [messages, setMessages] = useState(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [
          { type: 'bot', content: "Hi! I'm Kamrul's AI assistant. How can I help you learn more about him?" }
        ];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastMessageIndex, setLastMessageIndex] = useState(-1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  interface ResponsePattern {
    patterns: RegExp[];
    response: string;
  }

  const getResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for matches in response patterns
    for (const { patterns, response } of responsePatterns) {
      if (patterns.some(pattern => pattern.test(lowercaseInput))) {
        return response;
      }
    }

    return "I'm here to help you learn more about Kamrul. Feel free to ask about his experience, skills, education, or achievements!";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', content: inputValue };
    setMessages((prev: { type: string; content: string }[]) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setLastMessageIndex(messages.length + 1);

    // Simulate AI thinking time
    setTimeout(() => {
      const botMessage = { type: 'bot', content: getResponse(inputValue) };
      setMessages((prev: { type: string; content: string }[]) => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const suggestionTags = [
    "Skills", "Experience", "Education", "Achievements"
  ];

  interface Message {
    type: 'user' | 'bot';
    content: string;
  }

  const handleTagClick = (tag: string) => {
    const response = getResponse(tag.toLowerCase());
    setLastMessageIndex(messages.length + 1);
    setMessages((prev: Message[]) => [
      ...prev,
      { type: 'user', content: `Tell me about your ${tag}` },
      { type: 'bot', content: response }
    ]);
  };

  const clearChat = () => {
    setMessages([
      { type: 'bot', content: "Hi! I'm Kamrul's AI assistant. How can I help you learn more about him?" }
    ]);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 p-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-4 right-4 rounded-lg shadow-xl flex flex-col 
        ${isMinimized ? 'h-14' : 'h-[500px]'} 
        w-[350px] sm:w-[400px] 
        transition-all duration-300 z-50
        ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'bg-gray-900' : 'bg-blue-600'} text-white rounded-t-lg`}>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <span className="font-medium">Chat with Kamrul's AI</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="hover:text-blue-200">
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={clearChat} className="hover:text-blue-200 text-sm">
            Clear
          </button>
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:text-blue-200">
            {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:text-blue-200">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {messages.map((message: Message, index: number) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  : isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.type === 'bot' ? (
                <TypingAnimation 
                  text={message.content} 
                  shouldType={index === lastMessageIndex}
                />
                ) : (
                message.content
                )}
              </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex gap-1">
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} />
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '0.2s' }} />
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'}`} style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Tags */}
          <div className={`px-4 py-2 flex gap-2 justify-between ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {suggestionTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap
                  ${isDarkMode 
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className={`flex-1 p-2 rounded-lg focus:outline-none
                  ${isDarkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
                    : 'bg-white text-gray-800 border focus:border-blue-600'}`}
              />
              <button
                onClick={handleSend}
                className={`p-2 rounded-lg
                  ${isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioAIChat;