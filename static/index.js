const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

const result = document.querySelector("h1");

document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;

document.querySelector(".img2").src = `images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  result.textContent = "Player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  result.textContent = "Player2 wins!";
} else {
  result.textContent = "Draw!";
}
