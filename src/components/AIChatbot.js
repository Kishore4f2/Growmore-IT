import React, { useState, useRef, useEffect } from 'react';
import './AIChatbot.css';

const AIChatbot = ({ userType = 'employee' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hello! I'm your AI assistant. How can I help you today? I can assist with questions about tasks, payments, leave requests, and more.`
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Task-related queries
    if (lowerMessage.includes('task') || lowerMessage.includes('submit') || lowerMessage.includes('complete')) {
      return {
        type: 'bot',
        text: 'To submit a task, go to your dashboard → Tasks section → Click on "Mark as Complete" or upload your completed work. Your admin will review it and update the status.'
      };
    }
    
    // Payment-related queries
    if (lowerMessage.includes('payment') || lowerMessage.includes('salary') || lowerMessage.includes('due') || lowerMessage.includes('pay')) {
      return {
        type: 'bot',
        text: 'You can view your payment details in the Payment section of your dashboard. It shows your payment history, pending payments, and next payment dates.'
      };
    }
    
    // Leave-related queries
    if (lowerMessage.includes('leave') || lowerMessage.includes('holiday') || lowerMessage.includes('vacation')) {
      return {
        type: 'bot',
        text: 'To request leave, go to your dashboard → Leave Requests section → Click "Request Leave" → Fill out the form and submit. Your admin will review and approve it.'
      };
    }
    
    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return {
        type: 'bot',
        text: 'I can help you with:\n• Task submission and completion\n• Payment information\n• Leave requests\n• General queries\n\nWhat would you like to know?'
      };
    }
    
    // Default response
    return {
      type: 'bot',
      text: "I understand you're asking about: '" + userMessage + "'. For complex queries, I'll forward this to the admin who will get back to you soon. Is there anything else I can help with?"
    };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-icon">🤖</div>
              <div>
                <h3>AI Assistant</h3>
                <p>Online</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.type}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbot-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {!isOpen && <span className="chatbot-badge">AI</span>}
      </button>
    </>
  );
};

export default AIChatbot;
