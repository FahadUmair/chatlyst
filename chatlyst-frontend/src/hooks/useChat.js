import { useState, useCallback, useEffect } from "react";
import { checkHealth, sendMessage } from "../api/chatApi";

function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serverHealth, setServerHealth] = useState(null);

  // Server health hook
  const fetchServerHealthStatus = useCallback(async () => {
    try {
      const healthStatus = await checkHealth();
      console.log("Server health:", healthStatus);
      setServerHealth(healthStatus);
      setError(null);
    } catch (error) {
      console.error("Health check failed:", error);
      setServerHealth(null);
      setError("Server health check failed. Please try again later.");
    }
  }, []);

  // Send message hook
  const handleUserMessage = useCallback(async (userMessage) => {
    setIsLoading(true);
    setError(null);
    try {
      // Add user message to the chat
      const userMessageObj = { text: userMessage, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessageObj]);

      // Send message to the server
      const response = await sendMessage(userMessage);

      // Add server response to the chat
      const serverMessageObj = { text: response.message, isUser: false };
      
      setMessages((prevMessages) => [...prevMessages, serverMessageObj]);
    } catch (error) {
      console.error("Message request failed:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check server health on component mount
  useEffect(() => {
    fetchServerHealthStatus();
  }, [fetchServerHealthStatus]);

  return {
    messages,
    isLoading,
    error,
    serverHealth,
    handleUserMessage,
    fetchServerHealthStatus,
  };
};

export default useChat;



