const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInputField = document.querySelector('#chatbot-input-field');
const chatbotSendButton = document.querySelector('#chatbot-send-button');

chatbotSendButton.addEventListener('click', () => {
  const userMessage = chatbotInputField.value;
  if (userMessage) {
    chatbotInputField.value = '';
    addMessage('user', userMessage);
    generateBotResponse(userMessage);
  }
});

function addMessage(role, message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.classList.add(role);
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
  // Use OpenAI API to generate bot response
  // Code for sending request to OpenAI API goes here
  // Once response is received, call addMessage('bot', botResponse)
  const botResponse = 'This is a sample bot response.';
  addMessage('bot', botResponse);
}
