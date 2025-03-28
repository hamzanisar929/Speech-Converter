import { useState, useEffect } from "react";
import "./textSpeechConverter.css";
import { ChevronDown } from "lucide-react";

const TextSpeechConverter = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (e) => {
    setSelectedVoice(voices[e.target.value]);
  };

  const speakText = () => {
    if (!text.trim()) return;

    const speech = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      speech.voice = selectedVoice;
    }
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="hero">
      <h1>
        Text To Speech <span>Converter</span>
      </h1>
      <textarea
        placeholder="Write anything here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="row">
        <div className="custom-select">
          <select onChange={handleVoiceChange}>
            {voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name}
              </option>
            ))}
          </select>
          <ChevronDown className="dropdown-icon" size={20} />
        </div>
        <button onClick={speakText}>Listen</button>
      </div>
    </div>
  );
};

export default TextSpeechConverter;
