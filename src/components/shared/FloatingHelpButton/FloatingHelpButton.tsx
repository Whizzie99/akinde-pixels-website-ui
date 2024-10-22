"use client";

import { useState, useEffect, useRef } from "react";
import { BsEnvelope, BsSend } from "react-icons/bs";
import { X } from "lucide-react";
import { Message } from "../chatbox/ChatType";

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can we help you today?",
      sender: "admin",
      timestamp: new Date(),
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    setTimeout(() => {
      const adminResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! We'll respond shortly.",
        sender: "admin",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, adminResponse]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex items-center gap-x-2 z-40">
        <div className="transform transition-transform duration-200 hover:scale-105">
          <div className="flex items-center gap-x-2 overflow-hidden">
            {!isOpen && (
              <p className="text-sm py-2 px-4 bg-[#FDFDFD] shadow-xl rounded">
                Need help?
              </p>
            )}
            <button
              onClick={toggleModal}
              className="cursor-pointer bg-[#313131] p-4 rounded shadow-lg hover:bg-[#404040] transition-colors"
              aria-label={isOpen ? "Close chat" : "Open chat"}
            >
              {isOpen ? (
                <X className="text-white h-6 w-6" />
              ) : (
                <BsEnvelope className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] bg-white rounded-lg shadow-2xl z-40 overflow-hidden">
          <div className="bg-[#313131] p-4 text-white">
            <h3 className="font-medium">Live Chat Support</h3>
            <p className="text-sm text-gray-300">
              We typically reply within minutes
            </p>
          </div>

          <div className="h-[300px] p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-[#F28E2C] text-black"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs mt-1 opacity-70 block">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#313131]"
              />
              <button
                type="submit"
                className="bg-[#313131] text-white p-2 rounded-lg hover:bg-[#404040] transition-colors"
                aria-label="Send message"
              >
                <BsSend className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatModal;
