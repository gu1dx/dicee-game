var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);

image2.setAttribute("src", randomImageSource2);

//draw
if (randomNumber1 == randomNumber2) {
    title = document.querySelector("h1").innerHTML = "Draw!";
}
//player 2 wins
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
    //player 1 wins
} else {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}