// VARIABLES
let textarea = document.getElementById('text');
let charCount = document.getElementById('character-count');
let wordCount = document.getElementById('word-count');
let message = document.querySelector('#message');
const regex = /\s./gm;


// FUNCTIONS
// This function renders the number of characters that a user types, onto the screen
function renderCounts() {
        // Get the value of the textarea input string
        let string = textarea.value;

        // Split the input string into words
        let words = string.split(regex).filter(function(char) {
            return char !== ""
        });

        // Render the word count (make words plural if there is more than one word detected)
        wordCount.textContent = words.length === 1 ? 
            words.length + ' word' : 
            words.length + ' words';

        // Split the input string into characters
        let characters = string.split("");

        // Render the character count (make words plural if there is more than one character detected)
        charCount.textContent = characters.length === 1 ? 
            characters.length + ' character' : 
            characters.length + ' characters';  
}

// EVENT LISTENERS
textarea.addEventListener('input', renderCounts);