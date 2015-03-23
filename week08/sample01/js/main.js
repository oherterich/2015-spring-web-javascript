// All Buttons
var buttons = document.querySelectorAll('.pallette');

// Buttons
var blackButton = document.querySelector('.pallette-1');
var redButton = document.querySelector('.pallette-2');
var greenButton = document.querySelector('.pallette-3');
var blueButton = document.querySelector('.pallette-4');

// This function is called when we click on the black button in our page.
blackButton.addEventListener('click', function(e) {
	// Change the CSS style of the HTML body to be black;
	document.body.style.backgroundColor = '#000000';
});

redButton.addEventListener('click', function(e) {
	document.body.style.backgroundColor = '#ff0000';
});

greenButton.addEventListener('click', function(e) {
	document.body.style.backgroundColor = '#00ff00';
});

blueButton.addEventListener('click', function(e) {
	document.body.style.backgroundColor = '#0000ff';
});