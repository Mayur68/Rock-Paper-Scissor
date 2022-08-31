let s1 = document.getElementById("sc-box");
let s2 = document.getElementById("sc-box1");
let s3 = document.getElementById("sc-box2");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var rock1 = document.getElementById("rock1");
var paper1 = document.getElementById("paper1");
var scissor1 = document.getElementById("scissor1");

let y = 0;
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
    // alert(result);
    score(result);
    // printresult(result);
}

function attempt() {
    // alert("Attempt = " + y++);
    y++
    s2.textContent = y;
}

function score(result) {
    if (result == "win") {
        z++;
        //  alert("Score is " + z);
        s1.textContent = z;
    } else

    {
        //  alert("Score is " + z);
        s1.textContent = z;
    }
}

function computer_turn(com) {

    return com[Math.floor(Math.random() * com.length)];

}

/*function printresult(result) {
    if (result == "win")
        s3.textContent = b;
    else if (result == "lose")
        s3.textContent = c;
    else
        s3.textContent = a;
}*/

function wincheck(cr, pr) {
    if (cr == 1 && pr == 1) {
        rock.style.color = "white";
        rock1.style.color = "white";
        paper.style.color = "";
        paper1.style.color = "";
        scissor.style.color = "";
        scissor1.style.color = "";
        s3.textContent = a;
        return a;
    } else if (cr == 2 && pr == 2) {
        rock.style.color = "";
        rock1.style.color = "";
        paper.style.color = "white";
        paper1.style.color = "white";
        scissor.style.color = "";
        scissor1.style.color = "";
        s3.textContent = a;
        return a;
    } else if (cr == 3 && pr == 3) {
        rock.style.color = "";
        rock1.style.color = "";
        paper.style.color = "";
        paper1.style.color = "";
        scissor.style.color = "white";
        scissor1.style.color = "white";
        s3.textContent = a;
        return a;
    } else if (cr == 1 && pr == 2) {
        rock.style.color = "";
        rock1.style.color = "red";
        paper.style.color = "white";
        paper1.style.color = "";
        scissor.style.color = "";
        scissor1.style.color = "";
        s3.textContent = b;
        return b;
    } else if (cr == 1 && pr == 3) {
        rock.style.color = "";
        rock1.style.color = "white";
        paper.style.color = "";
        paper1.style.color = "";
        scissor.style.color = "red";
        scissor1.style.color = "";
        s3.textContent = c;
        return c;
    } else if (cr == 2 && pr == 1) {
        rock1.style.color = "";
        paper.style.color = "";
        paper1.style.color = "white";
        rock.style.color = "red";
        scissor.style.color = "";
        scissor1.style.color = "";
        s3.textContent = c;
        return c;
    } else if (cr == 2 && pr == 3) {
        rock.style.color = "";
        rock1.style.color = "";
        paper.style.color = "";
        paper1.style.color = "red";
        scissor.style.color = "white";
        scissor1.style.color = "";
        s3.textContent = b;
        return b;
    } else if (cr == 3 && pr == 1) {
        rock1.style.color = "";
        paper.style.color = "";
        paper1.style.color = "";
        scissor.style.color = "";
        scissor1.style.color = "red";
        rock.style.color = "white";
        s3.textContent = b;
        return b;
    } else if (cr == 3 && pr == 2) {
        rock.style.color = "";
        rock1.style.color = "";
        paper1.style.color = "";
        scissor.style.color = "";
        scissor1.style.color = "red";
        paper.style.color = "white";
        s3.textContent = c;
        return c;
    }

}
