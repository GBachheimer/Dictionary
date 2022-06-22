const wordsList = new Set();

function addWord(word) {
    wordsList.add(word.toLowerCase());
}

function searchWord(word) {
    if (wordsList.has(word.toLowerCase())) {
        alert("This word is already in this dictionary.");
    } else {
        alert("OOOPS! This word is not in this dictionary.")
    }
}

function deleteWord(word) {
    wordsList.delete(word.toLowerCase());
}
