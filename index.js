function roll() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const dice1 = "./images/" + "dice" + randomNumber1 + ".png";
  const dice2 = "./images/" + "dice" + randomNumber2 + ".png";
  document.getElementById("dice1").setAttribute("src", dice1);
  document.getElementById("dice2").setAttribute("src", dice2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("result").textContent = "Player1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById("result").textContent = "Player2 wins";
  } else {
    document.getElementById("result").textContent = "Draw!!";
  }
}
