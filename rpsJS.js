function play(user) {
    let computer = Math.floor(Math.random() * 3);
    let computerChoice = ['rock', 'paper', 'scissors'][computer];
  
    let result = "";
    if (user === computerChoice) {
      result = "tie";
    } else if ((user === 'rock' && computerChoice === 'scissors') || (user === 'paper' && computerChoice === 'rock') || (user === 'scissors' && computerChoice === 'paper')) {
      result = "win";
    } else {
      result = "lose";
    }
  
    alert("Computer chose " + computerChoice + ", you " + result + "!");
  }