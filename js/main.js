console.log("Up and Running");

// create object array with answers
// create logic to display image & answers in buttons
// create logic to update progess bar
// create logic for next question button

let questions = [
  {"ans":"Princess Leia", "alt":"Queen Amidala", "alt1":"Your Mom"},
  {"ans":"Han Solo", "alt":"Boba Fett", "alt1":"Luke Skywalker"},
  {"ans":"Chewbacca", "alt":"Ewok", "alt1":"Jabba Hutt"},
  {"ans":"Jabba Hutt", "alt":"The Blob", "alt1":"Slimer"},
  {"ans":"R2-D2", "alt":"C3-PO", "alt1":"BB-12"}
];

const charPics = [
  "images/characters/princessleia.png",
  "images/characters/hansolo.png",
  "images/characters/chewbacca.png",
  "images/characters/jabbahutt.png",
  "images/characters/r2d2.png"
]

const startGame = function() {
  let i=0;
  $('#starwarscharacter').attr("src", charPics[i]);
  $('#answer1').text(questions[i].ans);
  $('#answer2').text(questions[i].alt);
  $('#answer3').text(questions[i].alt1);
  $('.answer').on('click', function(e) {
      e.preventDefault();
      if (event.target.id === "answer1") {
        if ($('#answer1').text() === questions[i].ans) {
          alert("You got it right!");
        } else {
          alert("Sorry, please click Next button.")
        }
        // console.log("answer 1 button clicked");
        // let temp = $('#answer1').text();
        // console.log(temp);
      } else if (event.target.id === "answer2") {
          console.log("answer 2 button clicked");
        } else if (event.target.id === "answer3") {
          console.log("answer 3 button clicked");
        }
      });
  };

$('#startGame').on('click', function(e) {
  e.preventDefault();
  console.log("Game Starts");
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  startGame();
  });
