console.log("Up and Running");

// create object array with answers
// create logic to display image & answers in buttons
// create logic to update progess bar
// create logic for next question button

let questions = [
  {"corans":"Princess Leia", "ans":"Queen Amidala", "ans1":"Princess Leia", "ans2":"Your Mom"},
  {"corans":"Han Solo", "ans":"Han Solo", "ans1":"Boba Fett", "ans2":"Luke Skywalker"},
  {"corans":"Chewbacca", "ans":"Chewbacca", "ans1":"Ewok", "ans2":"Jabba Hutt"},
  {"corans":"Jabba Hutt", "ans":"Jabba Hutt", "ans1":"The Blob", "ans2":"Slimer"},
  {"corans":"R2-D2", "ans":"R2-D2", "ans1":"C3-PO", "ans2":"BB-12"}
];

const charPics = [
  "images/characters/princessleia.png",
  "images/characters/hansolo.png",
  "images/characters/chewbacca.png",
  "images/characters/jabbahutt.png",
  "images/characters/r2d2.png"
]

let i=0;

const loadQuestions = function() {
  $('#starwarscharacter').attr("src", charPics[i]);
  $('#answer1').text(questions[i].ans);
  $('#answer2').text(questions[i].ans1);
  $('#answer3').text(questions[i].ans2);
  $('.answer').on('click', function(e) {
      e.preventDefault();
      if (event.target.id === "answer1") {
        if ($('#answer1').text() === questions[i].corans) {
          alert("You got it right!");
        } else {
          alert("Sorry, please click Next button.")
        }
      } else if (event.target.id === "answer2") {
          console.log("answer 2 button clicked");
          if ($('#answer2').text() === questions[i].corans) {
            alert("You got it right!");
          } else {
            alert("Sorry, please click Next button.")
          }
        } else if (event.target.id === "answer3") {
          console.log("answer 3 button clicked");
          if ($('#answer3').text() === questions[i].corans) {
            alert("You got it right!");
          } else {
            alert("Sorry, please click Next button.")
          }
        } else if (event.target.id === "nextQuestion") {
          i += 1;
          console.log("next question button clicked");
          loadQuestions();
        }
      });
  };

$('#startGame').on('click', function(e) {
  e.preventDefault();
  console.log("Game Starts");
  $('#trainingJedi').hide();
  $('#masterJedi').hide();
  loadQuestions();
  });
