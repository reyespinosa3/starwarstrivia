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

const loadButtons = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $(aOne).removeClass("hidden");
  $(aTwo).removeClass("hidden");
  $(aThree).removeClass("hidden");
  checkProgress();
}

const checkProgress = function() {
  if (correct == 10) {
    $('#masterJedi').show();
    $('#myBar').attr("style", "width:100%");
  } else if (correct == 5) {
    $('#trainingJedi').show();
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

const checkAnswers = function() {
  $(aOne).on('click', function(e) {
    if (aOne.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      updateButtons();
    } else {
      i += 1;
      updateButtons();
    }
  });

  $(aTwo).on('click', function(e) {
    if (aTwo.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      updateButtons();
    } else {
      i += 1;
      updateButtons();
    }
  });

  $(aThree).on('click', function(e) {
    if (aThree.text() === answers[i]) {
      i += 1;
      correct++;
      level += 10;
      updateButtons();
    } else {
      i += 1;
      updateButtons();
    }
  });
}

$('#startGame').on('click', function(e) {
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  loadButtons();
  })
