const wordsList = new Set();

function addWord(word) {
    var regex = /^[A-Za-z]+$/;
    if (regex.test(word)) {
        wordsList.add(word.toLowerCase());
    } else {
        alert("This is not a word.")
    }
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

function displayAll() {
    let text = "";
    for (const x of wordsList.values()) {
      text += x + "<br>";
    }
    document.getElementById("display").innerHTML = text;
}
