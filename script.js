"use strict";

// run code after the entire HTML document has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".submit-btn");
  const textarea = document.querySelector(".textarea-input");

  button.addEventListener("click", function () {
    const textInput = textarea.value.trim();

    // alert user if input is empty
    if (!textInput) {
      alert("El área de texto no puede quedar en blanco.");
      return;
    }

    // constructor for text-to-speech when user writes in the input field
    let speech = new SpeechSynthesisUtterance(textInput);
    speech.lang = "en-US";
    speech.rate = 1;

    // stop any ongoing speech before starting new one
    speechSynthesis.cancel();

    //disable button to prevent spam clicking
    button.disabled = true;

    // reanable button when speech ends
    speech.onend = () => {
      button.disabled = false;
    };

    //reanable button in case of errors
    speech.onerror = () => {
      button.disabled = false;
    };

    // say the text
    speechSynthesis.speak(speech);
  });
});
