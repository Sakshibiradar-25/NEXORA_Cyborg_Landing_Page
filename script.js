
// ======================================
// NEXORA - JAVASCRIPT
// ======================================


// ======================================
// 1. MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ======================================
// 2. CYBORG CUSTOMIZATION LAB
// ======================================

// Information about each cyborg module

const modules = {

    eye: {
        name: "VISION MODULE",
        info: "Advanced optical system activated. Target detection and visual processing are enabled.",
        label: "Vision Power",
        value: 95
    },

    arm: {
        name: "ROBOTIC ARM",
        info: "Mechanical strength system activated. Precision movement and robotic control are enabled.",
        label: "Mechanical Strength",
        value: 80
    },

    core: {
        name: "NEURAL CORE",
        info: "Neural processing system activated. Intelligent computing and information processing are enabled.",
        label: "Processing Power",
        value: 90
    }

};


// Select all module buttons

const moduleButtons = document.querySelectorAll(".module-btn");

const moduleName = document.getElementById("moduleName");
const moduleInfo = document.getElementById("moduleInfo");
const statLabel = document.getElementById("statLabel");
const statValue = document.getElementById("statValue");
const progressFill = document.getElementById("progressFill");


// Function to change selected module

function selectModule(moduleType) {

    const selectedModule = modules[moduleType];

    if (!selectedModule) {
        return;
    }

    // Update module information

    moduleName.textContent = selectedModule.name;

    moduleInfo.textContent = selectedModule.info;

    statLabel.textContent = selectedModule.label;

    statValue.textContent = selectedModule.value + "%";

    // Update progress bar

    progressFill.style.width = selectedModule.value + "%";


    // Update active button

    moduleButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.module === moduleType) {

            button.classList.add("active");

        }

    });

}


// Add click events to module buttons

moduleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedType = button.dataset.module;

        selectModule(selectedType);

    });

});


// ======================================
// 3. AI ASSISTANT CHATBOT
// ======================================

const chatForm = document.getElementById("chatForm");

const chatInput = document.getElementById("chatInput");

const chatMessages = document.getElementById("chatMessages");


// Predefined AI responses

function getAIResponse(message) {

    const question = message.toLowerCase().trim();


    // Greeting

    if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ) {

        return "Hello! Welcome to NEXORA. How can I help you explore the future of technology?";

    }


    // Cyborg

    if (question.includes("cyborg")) {

        return "A cyborg is a being that combines biological human parts with technological or mechanical components. It represents the connection between humans and machines.";

    }


    // Artificial Intelligence

    if (
        question.includes("artificial intelligence") ||
        question.includes("what is ai") ||
        question === "ai"
    ) {

        return "Artificial Intelligence (AI) is a technology that enables computer systems to perform tasks such as learning, problem-solving, understanding language and recognizing patterns.";

    }


    // Robotics

    if (question.includes("robot")) {

        return "Robotics is a field of technology focused on designing, building and operating robots. It combines engineering, programming, electronics and artificial intelligence.";

    }


    // Neural networks

    if (
        question.includes("neural") ||
        question.includes("brain")
    ) {

        return "Neural networks are computing systems inspired by the structure of the human brain. They learn patterns from data and are used in applications like image recognition and language processing.";

    }


    // Technology

    if (question.includes("technology")) {

        return "Technology helps humans solve problems using scientific knowledge and engineering. NEXORA explores AI, robotics, neural networks and human-machine interaction.";

    }


    // Customization

    if (
        question.includes("custom") ||
        question.includes("upgrade") ||
        question.includes("lab")
    ) {

        return "Welcome to the Cyborg Customization Lab! You can select the Vision Module, Robotic Arm or Neural Core to explore different system capabilities.";

    }


    // Future

    if (
        question.includes("future") ||
        question.includes("2075")
    ) {

        return "Imagine a future where intelligent machines, advanced robotics and humans work together. NEXORA represents this futuristic concept.";

    }


    // Help

    if (question.includes("help")) {

        return "I can help you explore cyborgs, artificial intelligence, robotics, neural networks and futuristic technology. Try asking: What is a cyborg?";

    }


    // Default response

    return "Interesting question! I am a demo NEXORA assistant. Try asking me about cyborgs, AI, robotics, neural networks or futuristic technology.";

}


// Function to display a message

function addMessage(message, sender) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("message");

    const label = document.createElement("span");

    label.classList.add("message-label");

    label.textContent =
        sender === "user" ? "YOU" : "NEXORA AI";

    const messageText = document.createElement("div");

    // Use textContent to safely display user input

    messageText.textContent = message;

    messageElement.appendChild(label);

    messageElement.appendChild(messageText);


    if (sender === "user") {

        messageElement.classList.add("user-message");

    } else {

        messageElement.classList.add("bot-message");

    }


    chatMessages.appendChild(messageElement);

    // Automatically scroll to latest message

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


// Function to send a message

function sendMessage(message) {

    const userMessage = message.trim();

    if (userMessage === "") {
        return;
    }


    // Display user message

    addMessage(userMessage, "user");


    // Clear input field

    chatInput.value = "";


    // Display typing animation

    const typingElement = document.createElement("div");

    typingElement.classList.add("typing");

    typingElement.textContent = "NEXORA AI is processing...";

    chatMessages.appendChild(typingElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;


    // Generate AI response after a short delay

    setTimeout(function () {

        typingElement.remove();

        const response = getAIResponse(userMessage);

        addMessage(response, "bot");

    }, 900);

}


// Handle chat form submission

chatForm.addEventListener("submit", function (event) {

    event.preventDefault();

    sendMessage(chatInput.value);

});


// ======================================
// 4. CHAT SUGGESTION BUTTONS
// ======================================

const suggestionButtons =
    document.querySelectorAll(".suggestion-btn");


suggestionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const question = button.dataset.question;

        sendMessage(question);

    });

});


// ======================================
// 5. ANIMATED STATISTICS
// ======================================

const counters = document.querySelectorAll(".counter");


// Function to animate numbers

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    const duration = 1500;

    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const currentValue = Math.floor(target * progress);

        counter.textContent = currentValue;


        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }

    }


    requestAnimationFrame(updateCounter);

}


// Start counters when the statistics section becomes visible

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const counter = entry.target;

                if (counter.dataset.animated === "true") {
                    return;
                }

                counter.dataset.animated = "true";

                animateCounter(counter);

                observer.unobserve(counter);

            }

        });

    }, {
        threshold: 0.5
    });


    counters.forEach(function (counter) {

        observer.observe(counter);

    });

} else {

    // Fallback for older browsers

    counters.forEach(function (counter) {

        counter.textContent = counter.dataset.target;

    });

}


// ======================================
// 6. WELCOME MESSAGE IN CONSOLE
// ======================================

console.log(
    "%c NEXORA SYSTEM ONLINE ",
    "background: #00eaff; color: #050816; font-size: 18px; padding: 10px; font-weight: bold;"
);

console.log("Welcome to the NEXORA futuristic experience!");
