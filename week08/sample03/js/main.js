// Buttons
var buttons = document.querySelectorAll('.pallette');
var blackButton = document.querySelector('.pallette-1');
var redButton = document.querySelector('.pallette-2');
var greenButton = document.querySelector('.pallette-3');
var blueButton = document.querySelector('.pallette-4');

// Paragraph
var myParagraphs = document.querySelectorAll('p');

var myWords = ['Banana', 'Barf', 'Bart Simpson', 'Blackberry', 'Bleach'];

blackButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('black-bg');
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('green-bg');
		myParagraphs[i].classList.remove('blue-bg');

		var randomNumber = Math.floor(Math.random() * myWords.length);
		myParagraphs[i].innerHTML = myWords[randomNumber];
	}
});

redButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('red-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('green-bg');
		myParagraphs[i].classList.remove('blue-bg');

		var randomNumber = Math.floor(Math.random() * myWords.length);
		myParagraphs[i].innerHTML = myWords[randomNumber];
	}
});

greenButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('green-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('blue-bg');

		var randomNumber = Math.floor(Math.random() * myWords.length);
		myParagraphs[i].innerHTML = myWords[randomNumber];
	}
});

blueButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('blue-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('green-bg');

		var randomNumber = Math.floor(Math.random() * myWords.length);
		myParagraphs[i].innerHTML = myWords[randomNumber];
	}
});