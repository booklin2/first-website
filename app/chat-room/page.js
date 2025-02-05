'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    // 新增使用者訊息
    const userMessage = {
      id: Date.now(),
      text: message,
      timestamp: new Date().toLocaleString(),
      sender: '使用者',
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // 發送請求到 AI API
      const response = await fetch('/chat-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: message }),
      });

      if (!response.ok) {
        throw new Error('API 請求失敗');
      }

      const data = await response.json();

      // 新增 AI 回應
      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        timestamp: new Date().toLocaleString(),
        sender: 'AI',
        isUser: false
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      // 可以在這裡加入錯誤提示
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-500 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="/" className="text-xl font-bold hover:text-purple-200">首頁</a>
          </div>
          <div className="space-x-6">
            <a href="/about" className="hover:text-purple-200">關於本站</a>
            <a href="/todo" className="hover:text-purple-200">待辦事項</a>
            <a href="/chat-room" className="hover:text-purple-200">聊天室</a>
            <a href="/contact" className="hover:text-purple-200">聯絡資訊</a>
          </div>
        </div>
      </nav>

      <div className="pt-16 container mx-auto px-4 min-h-screen flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">聊天室</h1>
        
        {/* Messages Display */}
        <div className="flex-1 max-w-3xl mx-auto w-full bg-gray-50 rounded-lg p-4 mb-8 overflow-y-auto">
          <div className="space-y-6">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
              >
                {/* Sender Name */}
                <span className="text-sm text-gray-600 mb-1">{msg.sender}</span>
                {/* Message Bubble */}
                <div 
                  className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                    msg.isUser 
                      ? 'bg-green-500 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                </div>
                {/* Timestamp */}
                <span className="text-xs text-gray-500 mt-1">{msg.timestamp}</span>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                目前沒有訊息
              </div>
            )}
          </div>
        </div>

        {/* Chat Input Form */}
        <div className="max-w-3xl mx-auto w-full sticky bottom-0 bg-white p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="輸入訊息..."
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isLoading ? '處理中...' : '送出'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
} 