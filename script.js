let s1 = document.getElementById("sc-bsx");
var s2 = document.getElementById("sc-bsx1");
let s3 = document.querySelector("sc-bsx2");

let y = 1;
let z = 0;

var pr;
var a = "draw";
var b = "win";
var c = "lose";

var com = [1, 2, 3];
var per = [1, 2, 3];

function rps(x) {
    console.log("clicked");
    attempt();
    var cr = computer_turn(com);
    console.log(cr);
    var pr = x;
    console.log(pr);
    var result = wincheck(cr, pr);
    console.log(result);
    alert(result);
    score(result);
}

function attempt() {
    alert("Attempt = " + y++);
}

function score(result) {
    if (result == "win") {
        z++;
        alert("Score is " + z);
    } else

    {
        alert("Score is " + z);
    }
}

function computer_turn(com) {

    return com[Math.floor(Math.random() * com.length)];

}

function wincheck(cr, pr) {
    if (cr == 1 && pr == 1) {
        return a;
    } else if (cr == 2 && pr == 2) {
        return a;
    } else if (cr == 3 && pr == 3) {
        return a;
    } else if (cr == 1 && pr == 2) {
        return b;
    } else if (cr == 1 && pr == 3) {
        return c;
    } else if (cr == 2 && pr == 1) {
        return c;
    } else if (cr == 2 && pr == 3) {
        return b;
    } else if (cr == 3 && pr == 1) {
        return b;
    } else if (cr == 3 && pr == 2) {
        return c;
    }

}