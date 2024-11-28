document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
      addMessage('You', userInput);
      const response = getElizaResponse(userInput);
      addMessage('ELIZA', response);
      document.getElementById('user-input').value = '';
    }
  });
  
  function addMessage(sender, message) {
    const chatHistory = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
  
  function getElizaResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('i feel')) {
        return "Why do you feel that way?";
    } else if (lowerInput.includes('because')) {
        return "Is that the real reason?";
    } else if (lowerInput.includes('you are')) {
        return "What makes you think I am?";
    } else if (lowerInput.includes('i am')) {
        return "How long have you been?";
    } else if (lowerInput.includes('my')) {
        return "Tell me more about your " + extractWordAfter('my', lowerInput) + ".";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes('bye')) {
        return "Goodbye! It was nice talking to you.";
    } else {
        return getRandomFallbackResponse();
    }
}


// Fallback responses to add variety
function getRandomFallbackResponse() {
  const fallbackResponses = [
      "Can you elaborate on that?",
      "Why do you say that?",
      "How does that make you feel?",
      "Can you tell me more?",
      "That’s interesting. Why do you think so?"
  ];
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Helper to extract a word after a keyword
function extractWordAfter(keyword, text) {
  const words = text.split(' ');
  const index = words.indexOf(keyword);
  return index !== -1 && index + 1 < words.length ? words[index + 1] : "something";
}

  