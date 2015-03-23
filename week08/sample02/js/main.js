// Buttons
var blackButton = document.querySelector('.pallette-1');
var redButton = document.querySelector('.pallette-2');
var greenButton = document.querySelector('.pallette-3');
var blueButton = document.querySelector('.pallette-4');

// Paragraph
var myParagraphs = document.querySelectorAll('p');

blackButton.addEventListener('click', function(e) {
	// Loop through all of our paragraphs.
	// This will allow us to change to style for all of them.
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		// Instead of directly changing the style with Javascript,
		// we add a CSS class. These are defined in the actual CSS file.
		myParagraphs[i].classList.add('black-bg');

		// Be sure to remove the other classes when you add the new one.
		// Check your web inspector to see what classes your elements actually have.
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('green-bg');
		myParagraphs[i].classList.remove('blue-bg');
	}
});

redButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('red-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('green-bg');
		myParagraphs[i].classList.remove('blue-bg');
	}
});

greenButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('green-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('blue-bg');
	}
});

blueButton.addEventListener('click', function(e) {
	for ( var i = 0; i < myParagraphs.length; i++ ) {
		myParagraphs[i].classList.add('blue-bg');
		myParagraphs[i].classList.remove('black-bg');
		myParagraphs[i].classList.remove('red-bg');
		myParagraphs[i].classList.remove('green-bg');
	}
});