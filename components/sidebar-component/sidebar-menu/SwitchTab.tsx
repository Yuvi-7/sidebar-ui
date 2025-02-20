import React, { useState } from "react";

const SwitchTab = () => {
  const [activeTab, setActiveTab] = useState("my-account");

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 my-4">
      <div className="flex space-x-6 text-sm">
        <button
          className={`pb-2 font-medium transition ${
            activeTab === "my-account"
              ? "border-b-2 border-black text-black dark:border-white dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("my-account")}
        >
          My account
        </button>

        <button
          className={`pb-2 font-medium transition ${
            activeTab === "shared"
              ? "border-b-2 border-black text-black dark:border-white dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("shared")}
        >
          Shared with me
        </button>
      </div>
    </div>
  );
};

export default SwitchTab;
