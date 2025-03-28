import React, { useState } from "react";
import TextSpeechConverter from "./components/TextSpeechConverter";
import SpeechTextConverter from "./components/SpeechTextConverter";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("textToSpeech");

  return (
    <div className="app-container">
      <div className="tab-container">
        <button
          className={activeTab === "textToSpeech" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("textToSpeech")}
        >
          Text to Speech
        </button>
        <button
          className={activeTab === "speechToText" ? "active-tab" : "tab"}
          onClick={() => setActiveTab("speechToText")}
        >
          Speech to Text
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "textToSpeech" ? (
          <TextSpeechConverter />
        ) : (
          <SpeechTextConverter />
        )}
      </div>
    </div>
  );
};

export default App;
