console.log("Up and Running");

// create object array with answers
// create logic to display image & answers in buttons
// create logic to update progess bar
// create logic for next question button

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
  "Luke Skywalker"
];

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
  "images/characters/lukeskywalker.png"
];

let i=0;
let count=4;
let aOne = $('#answer1');
let aTwo = $('#answer2');
let aThree = $('#answer3');
let correct = 0;
let level = 0;

const endGame = function() {
    $('#starwarscharacter').addClass("hidden");
    $('#yodadance').addClass("hidden");
    $('#darthdance').removeClass("hidden");
    $('#who').text("You Are A Jedi Master!");
}

const loadButtons = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $(aOne).removeClass("hidden");
  $(aTwo).removeClass("hidden");
  $(aThree).removeClass("hidden");
  checkProgress();
}

const checkProgress = function() {
  if (correct == 10) {
    $('#currentLevel').attr("style", "color:yellow");
    $('#masterJedi').show();
    $('#myBar').attr("style", "width:100%");
    $('#level').text("Jedi Master");
    endGame();
  } else if (correct == 5) {
    $('#currentLevel').attr("style", "color:blue");
    $('#trainingJedi').show();
    $('#level').text("Jedi In Training");
  } else {
    let prog = level + "%";
    $('#myBar').attr("style", "width:"+prog);
  }
  checkAnswers();
}

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

const nextCharacter = function() {
  $('#contTraining').text("Correct Answer was " + answers[i-1]);
  updateButtons();
}

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
const rightAnswer = function() {
  $('#failure').addClass("hidden");
  $('#hellothere').addClass("hidden");
  $('#yodadance').removeClass("hidden");
}

const wrongAnswer = function() {
  $('#hellothere').addClass("hidden");
  $('#yodadance').addClass("hidden");
  $('#failure').removeClass("hidden");
}

$('#startGame').on('click', function(e) {
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  $('#description').hide();
  $('#hellothere').removeClass("hidden");
  $('#begin').text("Continue");
  $('#startGame').addClass("hidden");
  $('#contTraining').removeClass("hidden");
  loadButtons();
  })
