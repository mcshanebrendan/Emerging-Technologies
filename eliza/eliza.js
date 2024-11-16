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
    // Basic pattern-matching logic (replace with your chatbot algorithm)
    if (input.toLowerCase().includes('hello')) {
      return 'Hello! How can I help you today?';
    } else {
      return 'Tell me more.';
    }
  }
  