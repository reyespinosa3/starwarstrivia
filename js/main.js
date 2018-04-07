console.log("Up and Running");

// create object array with answers
// create logic to display image & answers in buttons
// create logic to update progess bar
// create logic for next question button

const questions = [
  {"ans":"Queen Amidala", "ans1":"Princess Leia", "ans2":"Your Mom"},
  {"ans":"Han Solo", "ans1":"Boba Fett", "ans2":"Luke Skywalker"},
  {"ans":"Chewbacca", "ans1":"Ewok", "ans2":"Jabba Hutt"},
  {"ans":"Jabba Hutt", "ans1":"The Blob", "ans2":"Slimer"},
  {"ans":"Teddy Bear", "ans1":"Wookie", "ans2":"Ewok"},
  {"ans":"Darth Maul", "ans1":"Darth Vader", "ans2":"Darth Sidious"},
  // {"ans":"R2-D2", "ans1":"C3-PO", "ans2":"BB-12"}
];

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

const loadButtons = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $(aOne).removeClass("hidden");
  $(aTwo).removeClass("hidden");
  $(aThree).removeClass("hidden");
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

const checkAnswers = function() {
  $(aOne).on('click', function(e) {
    if (aOne.text() === answers[i]) {
      console.log("Correct");
      i += 1;
      correct++;
      updateButtons();
    } else {
      console.log("Wrong");
      i += 1;
      updateButtons();
    }
  });

  $(aTwo).on('click', function(e) {
    if (aTwo.text() === answers[i]) {
      console.log("Correct");
      i += 1;
      correct++;
      updateButtons();
    } else {
      console.log("Nope");
      i += 1;
      updateButtons();
    }
  });

  $(aThree).on('click', function(e) {
    if (aThree.text() === answers[i]) {
      console.log("Correct");
      i += 1;
      correct++;
      updateButtons();
    } else {
      console.log("Sorry Charlie");
      i += 1;
      updateButtons();
    }
  });
}

$('#startGame').on('click', function(e) {
  console.log("Game Starts");
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  loadButtons();
  })
