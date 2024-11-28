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
        return "What makes you think I am " + extractWordAfter('you are', lowerInput) + "?";
    } else if (lowerInput.includes('i am')) {
        return transformInput(input) + "? Why do you say that?";
    } else if (lowerInput.includes('my')) {
        return "Tell me more about your " + extractWordAfter('my', lowerInput) + ".";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes('bye')) {
        return "Goodbye! It was nice talking to you.";
    } else if (lowerInput.includes('remember')) {
        return "Can you elaborate on what you mean by 'remember'?";
    } else if (lowerInput.includes('always')) {
        return "Can you think of a specific example of when that happens?";
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

function transformInput(input) {
  const replacements = {
      "i am": "you are",
      "you are": "I am",
      "i": "you",
      "my": "your",
      "your": "my"
  };

  const words = input.split(' ');
  return words.map(word => replacements[word.toLowerCase()] || word).join(' ');
}

  