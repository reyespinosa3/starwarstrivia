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
  "Darth vader",
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
let answerOne = $('#answer1');
let answerTwo = $('#answer2');
let answerThree = $('#answer3');
let correct = 0;
let level = 0;

// code to execute at end of the game
const endGame = function() {
  $('#starwarscharacter').addClass("hidden");
  $('#yodadance').addClass("hidden");
  $('#failure').addClass("hidden");
  $('#darthdance').removeClass("hidden");
  $('#who').text("You Are A Jedi Master!");
  $(answerOne).addClass("hidden");
  $(answerTwo).addClass("hidden");
  $(answerThree).addClass("hidden");
}

// code to execute to show current answer buttons
const loadButtons = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $(answerOne).removeClass("hidden");
  $(answerTwo).removeClass("hidden");
  $(answerThree).removeClass("hidden");
  checkProgress();
}

// code to update progress bar and images that coinside with progress
const checkProgress = function() {
  let prog = level + "%";
  if (correct == 10) {
    $('#trainingJedi').addClass("hidden");
    $('#masterJedi').removeClass("hidden").css("margin-left", "90%");
    $('#myBar').attr("style", "width:100%");
    $('#level').text("jedi master");
    new Audio("audio/jedi-know.mp3").play();
    endGame();
  } else if (correct == 5) {
    $('#padawan').addClass("hidden");
    $('#trainingJedi').removeClass("hidden").css("margin-left", prog);
    $('#level').text("jedi in training");
    $('#myBar').attr("style", "width:"+prog);
    new Audio("audio/forcestrong.mp3").play();
  } else if (correct > 5) {
    $('#trainingJedi').css("margin-left", prog);
    $('#myBar').attr("style", "width:"+prog);
  }  else {
    $('#myBar').attr("style", "width:"+prog);
    $('#padawan').css("margin-left", prog);
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
  $(answerOne).addClass("hidden");
  $(answerTwo).addClass("hidden");
  $(answerThree).addClass("hidden");
  let a = "#answer" + count;
  answerOne = $(a);
  let b = "#answer" + (count + 1);
  answerTwo = $(b);
  let c = "#answer" + (count + 2);
  answerThree = $(c);
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
  $(answerOne).on('click', function(e) {
    if (answerOne.text() === answers[i]) {
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

  $(answerTwo).on('click', function(e) {
    if (answerTwo.text() === answers[i]) {
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

  $(answerThree).on('click', function(e) {
    if (answerThree.text() === answers[i]) {
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
  new Audio("audio/Muchfear.mp3").play();
}

// code to execute on game start "Press To Start" button click
$('#startGame').on('click', function(e) {
  $('#description').hide();
  playTheme();
  $('#startGame').addClass("hidden");
  $('#contTraining').removeClass("hidden");
  $('#padawan').removeClass("hidden");
  loadButtons();
  })

const playTheme = function() {
  let theme = new Audio("audio/starwarstheme.mp3");
  theme.play();
  theme.volume=.1;
}
