const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const gen = document.getElementById("gen");
const res = document.getElementById("res");

const red_score = document.getElementById("red_score");
const green_score = document.getElementById("green_score");

const toss = document.getElementById("toss");

const red_play = document.getElementById("red_play");
const green_play = document.getElementById("green_play");

const who_won = document.getElementById("who_won");
red_score.value = 0;
green_score.value = 0;

let flag;

gen.addEventListener("click", () => {
    num1.value = Math.ceil(Math.random() * 6);
    num2.value = Math.ceil(Math.random() * 6);

    num1.innerText = `${num1.value}`;
    num2.innerText = `${num2.value}`;

    console.log(num1.value + " : " + num2.value);




    // This will check which one is OUT
    if (num1.value == num2.value) {
        // console.log("OUT!!!");
        if (red_score.value == 0 || green_score.value == 0) {
            if (flag == "red") {
                flag = "green";
                green_play.setAttribute("src", "bat.jpg");
                red_play.setAttribute("src", "ball.jpg");
                console.log("RED is OUT");
            } else {
                flag = "red";
                green_play.setAttribute("src", "ball.jpg");
                red_play.setAttribute("src", "bat.jpg");
                console.log("GREEN is OUT");
            }
        } else {
            if (red_score.value > green_score.value) {
                console.log("RED Won");
            } else if (red_score.value == green_score.value) {
                console.log("DRAW Match");
            } else {
                console.log("GREEN Won");
            }
        }


        // this will count scores of each player.
    } else {

        if (flag == "red") {
            red_score.value += num1.value;
            red_score.innerText = `${red_score.value}`;
        }

        if (flag == "green") {
            green_score.value += num2.value;
            green_score.innerText = `${green_score.value}`;
        }

        // if (red_score.value > green_score.value) {
        //     console.log("RED Won");
        // } else if (red_score.value == green_score.value) {
        //     console.log("DRAW Match");
        // } else {
        //     console.log("GREEN Won");
        // }

    }
});


res.addEventListener("click", () => {

    num1.innerText = `0`;
    num2.innerText = `0`;
    red_score.value = 0;
    green_score.value = 0;
    green_score.innerText = `0`;
    red_score.innerText = `0`;

    flag = "red";

});


toss.addEventListener("click", () => {

    let winner = Math.ceil(Math.random() * 2);
    // console.log(winner);

    if (winner == 1) {
        flag = "green";
        green_play.setAttribute("src", "bat.jpg");
        red_play.setAttribute("src", "ball.jpg");
        who_won.innerHTML = `<h1 style="color: green;"> GREEN WON THE TOSS </h1>`;
        console.log("GREEN WON TOSS");
    } else {
        flag = "red";
        red_play.setAttribute("src", "bat.jpg");
        green_play.setAttribute("src", "ball.jpg");
        who_won.innerHTML = `<h1 style="color: red;"> RED WON THE TOSS </h1>`;
        console.log("RED WON TOSS");
    }
})