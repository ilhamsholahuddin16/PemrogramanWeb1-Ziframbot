// ============================================
// ZiframeBot - Chatbot Engine & UI Logic
// ============================================

// Global variables
let chatRules = null;
let chatHistory = [];

// DOM Elements
const chatContainer = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-chat');

// ============================================
// Initialize Chatbot
// ============================================
async function initChatbot() {
    try {
        // Load rules from JSON
        const response = await fetch('rules.json');
        chatRules = await response.json();

        // Load chat history from localStorage
        loadChatHistory();

        // Display welcome message
        if (chatHistory.length === 0) {
            displayWelcomeMessage();
        } else {
            renderChatHistory();
        }

        // Setup event listeners
        setupEventListeners();

        console.log('✅ ZiframeBot initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing chatbot:', error);
        displayErrorMessage();
    }
}

// ============================================
// Event Listeners Setup
// ============================================
function setupEventListeners() {
    // Send button click
    sendButton.addEventListener('click', handleSendMessage);

    // Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    // Clear chat button
    if (clearButton) {
        clearButton.addEventListener('click', handleClearChat);
    }

    // Auto-resize textarea
    userInput.addEventListener('input', autoResizeTextarea);
}

// ============================================
// Message Handling
// ============================================
function handleSendMessage() {
    const message = userInput.value.trim();

    if (message === '') return;

    // Display user message
    displayMessage(message, 'user');

    // Clear input
    userInput.value = '';
    autoResizeTextarea();

    // Show typing indicator
    showTypingIndicator();

    // Process message and get response
    setTimeout(() => {
        const response = processMessage(message);
        hideTypingIndicator();
        displayMessage(response, 'bot');

        // Save to history
        saveChatHistory();
    }, 800 + Math.random() * 400); // Random delay 800-1200ms for realism
}

// ============================================
// Message Processing (Rule Matching)
// ============================================
function processMessage(userMessage) {
    if (!chatRules) {
        return "Maaf, sistem sedang bermasalah. Silakan refresh halaman.";
    }

    // Normalize input
    const normalizedInput = userMessage.toLowerCase().trim();

    // Find matching rule
    for (const rule of chatRules.rules) {
        for (const keyword of rule.keywords) {
            if (normalizedInput.includes(keyword.toLowerCase())) {
                return rule.response;
            }
        }
    }

    // No match found, return fallback
    return chatRules.fallback;
}

// ============================================
// Display Messages
// ============================================
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = sender === 'user' ? 'message-user slide-in-right' : 'message-bot slide-in-left';

    // Format message (preserve line breaks)
    bubbleDiv.innerHTML = formatMessage(message);

    messageDiv.appendChild(bubbleDiv);
    chatContainer.appendChild(messageDiv);

    // Add to history
    chatHistory.push({ message, sender, timestamp: new Date().toISOString() });

    // Scroll to bottom
    scrollToBottom();
}

function displayWelcomeMessage() {
    const welcomeText = "Halo! 👋 Selamat datang di ZiframeBot Demo.\n\nSaya siap membantu Anda! Coba tanyakan tentang fitur, harga, atau cara integrasi chatbot kami. 😊";
    displayMessage(welcomeText, 'bot');
}

function displayErrorMessage() {
    const errorText = "Maaf, terjadi kesalahan saat memuat chatbot. Silakan refresh halaman.";
    displayMessage(errorText, 'bot');
}

// ============================================
// Typing Indicator
// ============================================
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'flex justify-start mb-4';

    typingDiv.innerHTML = `
    <div class="message-bot">
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

    chatContainer.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// ============================================
// Utility Functions
// ============================================
function formatMessage(message) {
    // Convert line breaks to <br>
    return message.replace(/\n/g, '<br>');
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
    // Smooth scroll animation
    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function autoResizeTextarea() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
}

// ============================================
// Chat History Management (localStorage)
// ============================================
function saveChatHistory() {
    try {
        localStorage.setItem('ziframebot_history', JSON.stringify(chatHistory));
    } catch (error) {
        console.warn('Could not save chat history:', error);
    }
}

function loadChatHistory() {
    try {
        const saved = localStorage.getItem('ziframebot_history');
        if (saved) {
            chatHistory = JSON.parse(saved);
        }
    } catch (error) {
        console.warn('Could not load chat history:', error);
        chatHistory = [];
    }
}

function renderChatHistory() {
    chatHistory.forEach(item => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${item.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`;

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = item.sender === 'user' ? 'message-user' : 'message-bot';
        bubbleDiv.innerHTML = formatMessage(item.message);

        messageDiv.appendChild(bubbleDiv);
        chatContainer.appendChild(messageDiv);
    });

    scrollToBottom();
}

function handleClearChat() {
    if (confirm('Apakah Anda yakin ingin menghapus semua percakapan?')) {
        chatHistory = [];
        chatContainer.innerHTML = '';
        localStorage.removeItem('ziframebot_history');
        displayWelcomeMessage();
    }
}

// ============================================
// Initialize on Page Load
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
