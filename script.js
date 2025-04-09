// This script changes the text inside the paragraph when the button is clicked
const button = document.getElementById('changeTextButton');
const text = document.getElementById('text');

button.addEventListener('click', () => {
  text.textContent = "The text has been changed! Enjoy!";
});
