import React from "react";
import computerAvatar from "../assets/computer-avatar.png";
import reloadIcon from "../assets/reload-icon.png";

// Functional component to render the header of the chat window
function ChatWindowHeader({ serverHealth, fetchServerHealthStatus }) {
  return (
    <div className="h-10 bg-custom-light-purple p-4 flex items-center justify-between custom-blur-bg-40">
      <div className="flex items-center">
        <img src={computerAvatar} className="w-7" alt="Computer Icon" />
        <span className="pr-2" />
        <p>Computer</p>
      </div>
      <div>
        <button
          onClick={fetchServerHealthStatus}
          className={`mr-2 px-2 py-1 border rounded flex items-center text-xs`}
        >
          <img src={reloadIcon} className="w-4 mr-2" alt="Reload" />
          System Health:
          <span
            className={`ml-1 font-bold ${
              serverHealth ? "text-green-500" : "text-red-500"
            }`}
          >
            {serverHealth ? "OK" : "Down"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ChatWindowHeader;
