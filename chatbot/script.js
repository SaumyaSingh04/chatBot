const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const messageContainer = document.querySelector('.messages');

//event listener for send btn
sendButton.addEventListener('click', sendMessage);

//event listener for 'Enter' key in input field
userInput.addEventListener('keydown',function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    };
});

function sendMessage() {
const messageText = userInput.value.trim();

if(messageText !== '') {
    displayMessage(messageText,'user');

    //clear input field
    userInput.value = '';

    //bot res after delay
    setTimeout(() => {
        generateBotResponse(messageText);
    },500); //0.5 second delay
}
};

function displayMessage(text , sender) {
const messageElement = document.createElement('div');
messageElement.classList.add('message', sender);
messageElement.textContent = text;

messageContainer.appendChild(messageElement); //add msg to chat window
messageContainer.scrollTop = messageContainer.scrollHeight; //autoscroll to latest
};

function generateBotResponse(userMessage) {
let botMessage = '';

if (userMessage.toLowerCase().includes('hello')) {
    botMessage = 'hi there! how can I assist you ?';
} else if (userMessage.toLowerCase().includes('who are you')) {
    botMessage = 'I am Frontend Developer Saumya';
} else if (userMessage.toLowerCase().includes('how are you')) {
    botMessage = 'I\'m doing great! How about you';
} else {
    botMessage = 'I didn\'t quite understand that . Can you try asking something else?';
}
displayMessage(botMessage ,'bot')
};