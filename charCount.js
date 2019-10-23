let wordCountMessage = document.querySelector('#word-count');
let charCountMessage = document.querySelector('#character-count');
let textbox = document.querySelector('#text');

function charsAndWordsCount() {
        wordCountMessage.textContent = textbox.value.trim().split(/\s+/).length;
        charCountMessage.textContent = textbox.value.length;
}

textbox.addEventListener('input', charsAndWordsCount, false);