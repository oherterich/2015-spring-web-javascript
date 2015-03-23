// Save our 'new word' span to a variable.
var newWord = document.querySelector('.new-word');

// Arrays (lists) for some words and colors
var myWords = ['cool', 'gross', 'smelly', 'beautiful', 'fantastic', 'confusing'];
var myColors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];

// Get a random number and use it go get a random word in the array. 
var randomWordNum = Math.floor( Math.random() * myWords.length );
var randomWord = myWords[randomWordNum];

// Get a random number and use it go get a random color in the array.
var randomColorNum = Math.floor( Math.random() * myColors.length );
var randomColor = myColors[randomColorNum];

// Change the content and style of our word in the document.
newWord.innerHTML = randomWord;
newWord.style.color = randomColor;