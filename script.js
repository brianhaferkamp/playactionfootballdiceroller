//---------------------------------------
// scoreboard
//---------------------------------------

$(".visitor-plus").on("click", function () {
  var visitorScore = $(".visitor-score").text();
  visitorScore++;
  $(".visitor-score").text(visitorScore);
});

$(".visitor-minus").on("click", function () {
  var visitorScore = $(".visitor-score").text();
  if (visitorScore > 0) {
    visitorScore--;
  }
  $(".visitor-score").text(visitorScore);
});

$(".home-plus").on("click", function () {
  var homeScore = $(".home-score").text();
  homeScore++;
  $(".home-score").text(homeScore);
});

$(".home-minus").on("click", function () {
  var homeScore = $(".home-score").text();
  if (homeScore > 0) {
    homeScore--;
  }
  $(".home-score").text(homeScore);
});

//---------------------------------------
// dice rolls
//---------------------------------------

// d10
function die1() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: d10 tens place
  die1Result = dice.roll();
  // console.log("Die 1 result: " + die1Result);
}

// d10
function die2() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: d10 ones place
  die2Result = dice.roll();
  // console.log("Die 2 result: " + die2Result);
}

// d6
function die3() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: offensive play call
  die3Result = dice.roll();
  // console.log("Die 3 result: " + die3Result);
}

// d6
function die4() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll
  die4Result = dice.roll();
  // console.log("Die 4 result: " + die4Result);
}

//---------------------------------------
// functions
//---------------------------------------

function offenseRoll() {
  die3();
  $(".offense-roll").hide().text(die3Result).fadeIn();
}

function defenseRoll() {
  die3();
  $(".defense-roll").hide().text(die3Result).fadeIn();
}

function playResultRoll() {
  die1();
  die2();
  var playResultTotal = die1Result + die2Result;
  $(".play-result-roll").hide().text(playResultTotal).fadeIn();
}

function playerRoll() {
  die1();
  $(".player-roll").hide().text(die1Result).fadeIn();
}

function d10Roll() {
  die1();
  $(".d10-roll").hide().text(die1Result).fadeIn();
}

function d10Plusd10Roll() {
  die1();
  die2();

  var d10Plusd10RollResult = die1Result + die2Result;
  $(".d10-plus-d10-roll").hide().text(d10Plusd10RollResult).fadeIn();
}

function d6Roll() {
  die3();
  $(".d6-roll").hide().text(die3Result).fadeIn();
}

function d6Plusd6Roll() {
  die3();
  die4();

  var d6Plusd6RollResult = die3Result + die4Result;
  $(".d6-plus-d6-roll").hide().text(d6Plusd6RollResult).fadeIn();
}

function d10Plusd6Roll() {
  die1();
  die3();

  var d10Plusd6RollResult = die1Result + die3Result;
  $(".d10-plus-d6-roll").hide().text(d10Plusd6RollResult).fadeIn();
}

$("#roll").on("click", function () {
  // roll main rolls on button click
  offenseRoll();
  defenseRoll();
  playResultRoll();
  playerRoll();

  // clear secondary rolls on button click
  $(
    ".d6-roll, .d10-roll, .d6-plus-d6-roll, .d10-plus-d10-roll, .d10-plus-d6-roll"
  ).text("");
});

//---------------------------------------
// secondary rolls
//---------------------------------------

$(".d10-plus-d10").on("click", function () {
  d10Plusd10Roll();
});

$(".d6-plus-d6").on("click", function () {
  d6Plusd6Roll();
});

$(".d10-plus-d6").on("click", function () {
  d10Plusd6Roll();
});

$(".d10").on("click", function () {
  d10Roll();
});

$(".d6").on("click", function () {
  d6Roll();
});