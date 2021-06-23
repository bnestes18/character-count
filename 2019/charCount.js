let wordCount = document.querySelector('#word-count');
let charCount = document.querySelector('#character-count');
let textBox = document.querySelector('#text');
let wordText = document.querySelector('#word-text');

function charsAndWordsCount() {
        
        // Set the counts for words and characters
        wordCount.textContent = textBox.value.trim()
                                             .split(/\s+/)
                                             .filter(function(text) {
                                                return text !== "";
                                             })
                                             .length;
                                             
        charCount.textContent = textBox.value.length;
        
        // If only one word is typed in textarea, make 'word' singular
        if (wordCount.textContent > 0 && wordCount.textContent < 2) {
                wordText.textContent = wordCount.textContent + ' word'
        } else {
                wordText.textContent = wordCount.textContent + ' words';
        }
}

textBox.addEventListener('input', charsAndWordsCount, false);