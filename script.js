let randomNumber1 = Math.floor(Math.random() * 3) + 1;
let randomImage = "image/game" + randomNumber1 + ".jpg";
document.querySelector(".image1").setAttribute("src", randomImage);
let randomNumber2 = Math.floor(Math.random() * 3) + 1;
let randomImage2 = "image/game" + randomNumber2 + ".jpg";
document.querySelector(".image2").setAttribute("src", randomImage2);
