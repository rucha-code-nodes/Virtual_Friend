
import { useState, useEffect, useRef, useCallback } from 'react';
// Ensure this path points to where you saved the file above
import { getGeminiResponse } from '../services/geminiService';

export const useVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [status, setStatus] = useState("I'm here. Tap to talk whenever you're ready.");
  
  const recognitionRef = useRef(null);
  const selectedVoiceRef = useRef(null);

  // Initialize Speech Recognition and Load Voices
  useEffect(() => {
    // Browser compatibility check
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setStatus("Sorry, your browser doesn't support voice features. Try Chrome.");
      return;
    }

    // Setup Recognition
    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognitionRef.current = recognition;
    }

    // Function to find a female/friendly voice
    const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        
        selectedVoiceRef.current = voices.find(v => 
            (v.name.includes('Google') && v.name.includes('Female')) || 
            v.name.includes('Samantha') || 
            v.name.toLowerCase().includes('woman')
        ) || voices[0]; 
    };

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices(); // Attempt to load immediately

  }, []);

  // Text-to-Speech Function
  const speak = useCallback((text) => {
    if (!text) return;
    setIsSpeaking(true);
    setStatus("Speaking...");
    
    window.speechSynthesis.cancel(); // Stop any previous speech

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (selectedVoiceRef.current) {
        utterance.voice = selectedVoiceRef.current;
    }

    utterance.rate = 0.95;  // Relaxed pace
    utterance.pitch = 1.05; // Slightly higher/friendly pitch

    utterance.onend = () => {
      setIsSpeaking(false);
      setStatus("Tap microphone to reply");
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // Handle Speech Recognition Results
  const handleResult = useCallback(async (event) => {
    const transcript = event.results[0][0].transcript;
    setIsListening(false);
    setStatus("Let me think about that...");

    try {
      const aiResponse = await getGeminiResponse(transcript);
      speak(aiResponse);
    } catch (error) {
      console.error("Error processing response:", error);
      setStatus("Sorry, I had a moment of brain fog. Could you say that again?");
    }
  }, [speak]);

  // Attach Event Listeners
  useEffect(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    recognition.onresult = handleResult;
    
    recognition.onerror = (event) => {
        console.error("Speech Error:", event.error);
        setIsListening(false);
        setStatus("Hmm, I didn't quite catch that.");
    };
    
    recognition.onend = () => {
        setIsListening(false);
    };

    // Cleanup
    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
    };
  }, [handleResult]);

  // Start Listening Function
  const startListening = () => {
    if (!recognitionRef.current) { 
        alert("Speech recognition not supported"); 
        return; 
    }
    
    if (isSpeaking) { 
        window.speechSynthesis.cancel(); 
        setIsSpeaking(false); 
    }

    try {
        recognitionRef.current.start();
        setIsListening(true);
        setStatus("I'm listening...");
    } catch (err) { 
        console.error("Start Error:", err); 
        // Often happens if already started, just ignore or restart
    }
  };

  return { isListening, isSpeaking, status, startListening };
};