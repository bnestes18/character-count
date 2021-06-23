// VARIABLES
let textarea = document.getElementById('text');
let count = document.getElementById('character-count');
let message = document.querySelector('#message>strong');


// FUNCTIONS
// This functin renders the number of characters that a user types, onto the screen
function renderCount(e) {
    // Make sure that the textarea input field is being targeted
    if (e.target === textarea) {
        // Render the message with the character count
        count.textContent = e.target.value.length
        message.textContent = count.textContent === '1' ? 
            count.textContent + ' character' : 
            count.textContent + ' characters'
    }
}

// EVENT LISTENERS
document.addEventListener('input', renderCount);