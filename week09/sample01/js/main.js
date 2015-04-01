// Our game buttons
var $rockButton = $('.button-rock');
var $paperButton = $('.button-paper');
var $scissorsButton = $('.button-scissors');

// Our game choices
var choiceList = ['rock', 'paper', 'scissors'];
var playerChoice = '';
var computerChoice = '';

// Results
var $playerResultEl = $('.results-player__choice');
var $computerResultEl = $('.results-computer__choice');
var $finalResultEl = $('.results-message');
var winner = '';

// Score
var $playerScoreEl = $('.score-player');
var $computerScoreEl = $('.score-computer');
var playerScore = 0;
var computerScore = 0;

function init() {
	buttonEvents();
}

function buttonEvents() {
	$rockButton.on('click', function() {
		playerChoice = choiceList[0];
    computerChoice = makeComputerChoice();
    checkChoices();
	});

	$paperButton.on('click', function() {
		playerChoice = choiceList[1];
    computerChoice = makeComputerChoice();
    checkChoices();
	});

	$scissorsButton.on('click', function() {
		playerChoice = choiceList[2];
    computerChoice = makeComputerChoice();
    checkChoices();
	});
}

function makeComputerChoice() {
  var randomNum = Math.floor(Math.random() * choiceList.length);
  return choiceList[randomNum];
}

function checkChoices() {
  $playerResultEl.text(playerChoice);
  $computerResultEl.text(computerChoice);

  checkTie();
  checkRock();
  checkPaper();
  checkScissors();
  changeScore();
}

function checkTie() {
  if (playerChoice === computerChoice) {
    $finalResultEl.text('It\'s a tie!');
    winner = '';
  }
}

function checkRock() {
  if (playerChoice === choiceList[0]) {
    if (computerChoice === choiceList[1]) {
      $finalResultEl.text('You lose!');
      winner = 'computer';
    } else if (computerChoice === choiceList[2]) {
      $finalResultEl.text('You win!');
      winner = 'player';
    }
  }
}

function checkPaper() {
  if (playerChoice === choiceList[1]) {
    if (computerChoice === choiceList[2]) {
      $finalResultEl.text('You lose!');
      winner = 'computer';
    } else if (computerChoice === choiceList[0]) {
      $finalResultEl.text('You win!');
      winner = 'player';
    }
  }
}

function checkScissors() {
  if (playerChoice === choiceList[2]) {
    if (computerChoice === choiceList[0]) {
      $finalResultEl.text('You lose!');
      winner = 'computer';
    } else if (computerChoice === choiceList[1]) {
      $finalResultEl.text('You win!');
      winner = 'player';
    }
  }
}

function changeScore() {
  if (winner === 'player') {
    playerScore++;
  } else if ( winner === 'computer') {
    computerScore++;
  }

  $playerScoreEl.text(playerScore); 
  $computerScoreEl.text(computerScore);
}

init();