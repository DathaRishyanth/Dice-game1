var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw";
}
console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomDiceImage1);
console.log(randomDiceImage2);



