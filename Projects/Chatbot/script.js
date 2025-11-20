const chatBody = document.querySelector(".chat-body");
const input = document.querySelector(".message-input");
const sendBtn = document.querySelector(".send-btn");
const fileinput = document.querySelector(".file-btn");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = document.querySelector(".file-cancel");
const fileNameDisplay = document.querySelector(".file-name");
const emojiBtn = document.querySelector(".emoji-btn");
const emojiPicker = document.querySelector(".emoji-picker");

let userFile = null; // store uploaded file

// ------------------- GEMINI API -------------------
const API_KEY = "AIzaSyCsW_et_7BFxZ4HgC_MUncV1AQg5TLfY6A";
const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

// ------------------- THINKING UI -------------------
const thinkingHTML = `
    <img src="bot.png" class="bot-avatar loading-bot">
    <div class="message-text">
        <div class="thinking-indicator">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
`;

// ------------------- MESSAGE UI -------------------
function createMessage(content, role) {
    const div = document.createElement("div");
    div.className = `message ${role}-message`;
    div.innerHTML = content;
    return div;
}

function addMessage(text, role) {
    const html =
        role === "user"
            ? `<div class="message-text">${text}</div>`
            : `<img src="robot.png" class="bot-avatar"><div class="message-text">${text}</div>`;

    const msg = createMessage(html, role);
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addFilePreview(filename) {
    const html = `<div class="message-text"><b>📁 Uploaded:</b> ${filename}</div>`;
    chatBody.appendChild(createMessage(html, "user"));
}

function showThinking() {
    const wrapper = document.createElement("div");
    wrapper.className = "message bot-message thinking";
    wrapper.innerHTML = thinkingHTML;
    chatBody.appendChild(wrapper);
    chatBody.scrollTop = chatBody.scrollHeight;
    return wrapper;
}

// -------------------- API CALL --------------------
async function fetchFromGemini(text, fileObject) {
    const parts = [{ text }];

    if (fileObject) {
        parts.push({
            inline_data: {
                data: fileObject.data,
                mime_type: fileObject.mime_type
            }
        });
    }

    const body = { contents: [{ parts }] };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "API Error");
        }

        return data.candidates[0].content.parts[0].text
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .trim();

    } catch (err) {
        console.error(err);
        return "⚠️ Error occurred. Please try again.";
    }
}

// ------------------- SEND MESSAGE -------------------
async function handleSend() {
    const text = input.value.trim();
    if (!text && !userFile) return;

    // Add user text
    if (text) addMessage(text, "user");

    // Add file preview
    if (userFile) addFilePreview(userFile.name);

    input.value = "";

    const thinking = showThinking();

    // API call
    const reply = await fetchFromGemini(text, userFile);

    thinking.remove();
    addMessage(reply, "bot");

    // Clear file after sending
    userFile = null;
    fileUploadWrapper.style.display = "none";
}

// ------------------- EVENT LISTENERS -------------------
sendBtn.addEventListener("click", handleSend);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
    }
});

// ------------------- FILE UPLOAD -------------------
fileinput.addEventListener("change", () => {
    const file = fileinput.files[0];
    if (!file) return;

    fileNameDisplay.innerText = file.name;
    fileUploadWrapper.style.display = "flex";

    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result.split(",")[1];

        userFile = {
            name: file.name,
            data: base64,
            mime_type: file.type
        };
    };

    reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton.addEventListener("click", () => {
    userFile = null;
    fileinput.value = "";
    fileUploadWrapper.style.display = "none";
});



// Trigger file input
document.querySelector("#file-upload").addEventListener("click", () => {
    fileinput.click();
});


// Toggle emoji picker
emojiBtn.addEventListener("click", () => {
    emojiPicker.style.display =
        emojiPicker.style.display === "block" ? "none" : "block";
});

// Insert clicked emoji into input box
emojiPicker.addEventListener("click", (e) => {
    if (e.target.innerText) {
        input.value += e.target.innerText;
        input.focus();
    }
});

// Close emoji picker if clicked outside
document.addEventListener("click", (e) => {
    if (!emojiPicker.contains(e.target) && !emojiBtn.contains(e.target)) {
        emojiPicker.style.display = "none";
    }
});