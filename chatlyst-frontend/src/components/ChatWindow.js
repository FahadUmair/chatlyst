import React, { useState, useRef, useEffect } from "react";
import MessageBox from "./MessageBox";
import ChatWindowHeader from "./ChatWindowHeader";
import useChat from "../hooks/useChat";
import sendIcon from "../assets/send-icon.png";

// Main ChatWindow functional component
function ChatWindow() {
  // Destructuring values from the custom hook 'useChat'
  const {
    messages,
    isLoading,
    error,
    serverHealth,
    handleUserMessage,
    fetchServerHealthStatus,
  } = useChat();

  // State for the message input field
  const [inputMessage, setInputMessage] = useState("");

  // Ref to manage scrolling behavior of the message container
  const messagesEndRef = useRef(null);

  // Effect hook to auto-scroll to the latest message whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to scroll to the bottom of the message list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle form submission to send a user message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      handleUserMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div className="w-full max-w-screen-lg h-[80vh] shadow-md rounded-lg mx-auto  bg-gray-900 custom-blur-bg-40 border-solid border border-gray-400 flex flex-col">
      {/* Header div*/}
      <ChatWindowHeader
        serverHealth={serverHealth}
        fetchServerHealthStatus={fetchServerHealthStatus}
      />

      {/* Messages div */}
      <div className="flex-grow w-full flex flex-col space-y-4 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <MessageBox key={index} text={message.text} isUser={message.isUser} />
        ))}
        {/* Hidden element that the scroll should point to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white p-2 text-center">{error}</div>
      )}

      {/* Input div */}
      <div className="w-full h-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full max-w-screen-lg px-4"
        >
          <input
            className="p-1 flex-grow rounded-md text-black"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message... (500 characters max)"
            maxLength={500}
          />
          <span className="px-1" />
          <button
            type="submit"
            className="p-1 pr-0"
            disabled={isLoading || inputMessage.trim().length === 0}
          >
            <img src={sendIcon} className="w-8" alt="Send" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
