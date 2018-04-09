console.log("Up and Running");

// create object array with answers
// create logic to display image & answers in buttons
// create logic to update progess bar
// create logic for next question button

// array of correct answers
const answers = [
  "Princess Leia",
  "Han Solo",
  "Chewbacca",
  "Jabba Hutt",
  "Ewok",
  "Darth Maul",
  "R2-D2",
  "Jawa",
  "Darth Vader",
  "Luke Skywalker",
  "Boba Fett",
  "C-3P0"
];

// array of character pictures
const charPics = [
  "images/characters/princessleia.png",
  "images/characters/hansolo.png",
  "images/characters/chewbacca.png",
  "images/characters/jabbahutt.png",
  "images/characters/ewok.png",
  "images/characters/darthmaul.png",
  "images/characters/r2d2.png",
  "images/characters/jawa.png",
  "images/characters/darthvader.png",
  "images/characters/lukeskywalker.png",
  "images/characters/bobafett.png",
  "images/characters/c3po.png"
];

// global variables
let i=0;
let count=4;
let aOne = $('#answer1');
let aTwo = $('#answer2');
let aThree = $('#answer3');
let correct = 0;
let level = 0;

// code to execute at end of the game
const endGame = function() {
    $('#starwarscharacter').addClass("hidden");
    $('#yodadance').addClass("hidden");
    $('#failure').addClass("hidden");
    $('#darthdance').removeClass("hidden");
    $('#who').text("You Are A Jedi Master!");
    $(aOne).addClass("hidden");
    $(aTwo).addClass("hidden");
    $(aThree).addClass("hidden");
}

// code to execute to show current answer buttons
const loadButtons = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $(aOne).removeClass("hidden");
  $(aTwo).removeClass("hidden");
  $(aThree).removeClass("hidden");
  checkProgress();
}

// code to update progress bar and images that coinside with progress
const checkProgress = function() {
  if (correct == 10) {
    $('#currentLevel').attr("style", "color:yellow");
    $('#masterJedi').show();
    $('#myBar').attr("style", "width:100%");
    $('#level').text("jedi master");
    new Audio("audio/jedi-know.mp3").play();
    endGame();
  } else if (correct == 5) {
    $('#currentLevel').attr("style", "color:blue");
    $('#trainingJedi').show();
    $('#level').text("jedi In training");
    new Audio("audio/forcestrong.mp3").play();
  } else {
    let prog = level + "%";
    $('#myBar').attr("style", "width:"+prog);
  }
  checkEndGame();
}

// code to check if game is over due to all questions being asked
// but user not getting ten correct
const checkEndGame = function() {
console.log(count);
  if (count === 40) {
    endGame();
  } else {
    checkAnswers();
  }
}

// code to update buttons to show next set of answers for new
// character picture
const updateButtons = function() {
  $(aOne).addClass("hidden");
  $(aTwo).addClass("hidden");
  $(aThree).addClass("hidden");
  let a = "#answer" + count;
  aOne = $(a);
  let b = "#answer" + (count + 1);
  aTwo = $(b);
  let c = "#answer" + (count + 2);
  aThree = $(c);
  count +=3;
  loadButtons();
}

// code used to update correct answer on front page so user can
// see the correct answer to all the questions
const nextCharacter = function() {
  $('#contTraining').text("Correct Answer was " + answers[i-1]);
  updateButtons();
}

// code used to compare user selection to correct answer, also
// updates progress bar, nubmer of correct answers and correct
// answer array
const checkAnswers = function() {
  $(aOne).on('click', function(e) {
    if (aOne.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      rightAnswer();
      nextCharacter();
    } else {
      i += 1;
      wrongAnswer();
      nextCharacter();
    }
  });

  $(aTwo).on('click', function(e) {
    if (aTwo.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      rightAnswer();
      nextCharacter();
    } else {
      i += 1;
      wrongAnswer();
      nextCharacter();
    }
  });

  $(aThree).on('click', function(e) {
    if (aThree.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      rightAnswer();
      nextCharacter();
    } else {
      i += 1;
      wrongAnswer();
      nextCharacter();
    }
  });
}

// code to execute on a correct answer selection
const rightAnswer = function() {
  $('#failure').addClass("hidden");
  $('#hellothere').addClass("hidden");
  $('#yodadance').removeClass("hidden");
  if (correct === 1 || correct === 4 || correct === 7) {
    new Audio("audio/yodalaughing.mp3").play();
  }
}

// code to execute on an incorrect answer selection
const wrongAnswer = function() {
  $('#hellothere').addClass("hidden");
  $('#yodadance').addClass("hidden");
  $('#failure').removeClass("hidden");
  new Audio("audio/muchfear.mp3").play();
}


// code to execute on game start "Begin Your Training" button click
$('#startGame').on('click', function(e) {
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  $('#description').hide();
  $('#hellothere').removeClass("hidden");
  $('#begin').text("Continue");
  $('#startGame').addClass("hidden");
  $('#contTraining').removeClass("hidden");
  new Audio("audio/meetobiwan.mp3").play();
  loadButtons();
  })
