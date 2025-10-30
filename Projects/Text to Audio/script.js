let speech = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector("select");
const textArea = document.querySelector("textarea");
const button = document.querySelector("button");

// Populate voice list when voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  // Set default voice
  if (voices.length > 0) {
    speech.voice = voices[0];
  }

  // Clear old options before adding new ones
  voiceSelect.innerHTML = "";

  voices.forEach((voice, i) => {
    const option = new Option(voice.name, i);
    voiceSelect.add(option);
  });
};

// Change voice when user selects a different one
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Speak the text when button is clicked
button.addEventListener("click", () => {
  if (textArea.value.trim() === "") {
    alert("Please type something to speak!");
    return;
  }

  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
