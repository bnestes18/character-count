let countMessage = document.querySelector('#character-count');

function charCount(event) {
    if (event.target.matches('#text')) {
        countMessage.textContent = event.target.value.length; 
    };
}

window.addEventListener('input', charCount, false);