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

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return 'Hello! How are you feeling today?';
    } else if (lowerInput.includes('how are you')) {
        return 'I am just a program, but I’m here to listen to you.';
    } else if (lowerInput.includes('i feel')) {
        return 'Why do you feel that way?';
    } else if (lowerInput.includes('because')) {
        return 'Is that the real reason?';
    } else if (lowerInput.includes('bye')) {
        return 'Goodbye! It was nice talking to you.';
    } else {
        return 'Tell me more.';
    }
}

  