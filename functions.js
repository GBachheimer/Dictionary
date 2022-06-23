const wordsList = new Set();

function addWord(word) {
    var regex = /^[A-Za-z]+$/;
    if (regex.test(word)) {
        wordsList.add(word.toLowerCase());
        document.getElementById("display").innerHTML = "Your word was added successfully.";
    } else {
        document.getElementById("display").innerHTML = "This is not a word.";
    }
}

function searchWord(word) {
    if (wordsList.has(word.toLowerCase())) {
        document.getElementById("display").innerHTML = "This word is already in this dictionary.";
    } else {
        document.getElementById("display").innerHTML = "OOOPS! This word is not in this dictionary.";
    }
}

function deleteWord(word) {
    document.getElementById("display").innerHTML = "Word: " + word + " was deleted successfully.";
    wordsList.delete(word.toLowerCase());
}

function displayAll() {
    let text = "";
    for (const x of wordsList.values()) {
      text += x + "<br>";
    }
    document.getElementById("display").innerHTML = text;
}
