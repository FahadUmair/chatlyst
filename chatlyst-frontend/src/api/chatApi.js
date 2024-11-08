const API_URL = "http://127.0.0.1:8000/api"; 

export const sendMessage = async (message) => {
  message = message.slice(0, 500); // Cut off at 500 characters
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Message request failed. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in chat request:", error);
    throw new Error(`Message request failed: ${error.message}`);
  }
};


export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/health`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Health check failed. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Health check error:", error);
    throw new Error(`Health check failed: ${error.message}`);
  }
};