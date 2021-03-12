// first image 
const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomImg1 = "dice" + randomNum1 + ".png";
const randomImgSrc1 = "images/" + randomImg1;
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc1);

// changing second image
const randomNum2 = Math.floor(Math.random() * 6) + 1;
const randomImg2 = "dice" + randomNum2 + ".png";
const randomImgSrc2 = "images/" + randomImg2;
const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else {
    document.querySelector("h1").textContent = "Draw";
}