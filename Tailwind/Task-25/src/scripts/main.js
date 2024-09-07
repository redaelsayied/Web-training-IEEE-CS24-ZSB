const summary = {
  result: document.getElementById("result__valor"),
  categories: {
    reaction: document.getElementById("summary__reaction"),
    memory: document.getElementById("summary__memory"),
    verbal: document.getElementById("summary__verbal"),
    visual: document.getElementById("summary__visual"),
  },
  jsonData: {
    url: "data.json",
    player1: "player1",
    player2: "player2",
  },
  button: document.getElementById("summary__select-player"),
};

let currentPlayer = summary.jsonData.player1;
let playerScore = 0;

summary.button.addEventListener("click", () => {
  playerScore = 0;
  if (currentPlayer === summary.jsonData.player1) {
    currentPlayer = summary.jsonData.player2;
  } else {
    currentPlayer = summary.jsonData.player1;
  }
  getJsonInfo();
});

function getJsonInfo() {
  fetch(summary.jsonData.url).then((response) => {
    response.json().then((jsonSummary) => {
      let player;
      if (currentPlayer === summary.jsonData.player1) {
        player = jsonSummary.player1;
      } else {
        player = jsonSummary.player2;
      }
      player.map((element) => {
        switch (element.category) {
          case "Reaction":
            summary.categories.reaction.querySelector("h4>b").innerHTML =
              element.score;
            playerScore += element.score;
            break;
          case "Memory":
            summary.categories.memory.querySelector("h4>b").innerHTML =
              element.score;
            playerScore += element.score;
            break;
          case "Verbal":
            summary.categories.verbal.querySelector("h4>b").innerHTML =
              element.score;
            playerScore += element.score;
            break;
          case "Visual":
            summary.categories.visual.querySelector("h4>b").innerHTML =
              element.score;
            playerScore += element.score;
            summary.result.querySelector("h2").innerHTML = Math.round(
              playerScore / 4,
            );
            break;
          default:
            break;
        }
      });
    });
  });
}

getJsonInfo();
