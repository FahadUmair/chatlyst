import React from "react";

function MessageBox({ text = "No message provided", isUser = true }) {
  return (
    <div
      className={`p-4 inline-block bg-opacity-15 backdrop-blur-lg 
                backdrop-saturate-[185%] shadow-md max-w-[90%] sm:max-w-[80%] ${
                  isUser
                    ? "self-end ml-2 bg-user-chat"
                    : "self-start mr-2 bg-computer-chat"
                }`}
    >
      <p>{text}</p>
    </div>
  );
}

export default MessageBox;