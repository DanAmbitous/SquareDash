class Square {
    constructor(x,y,speed,name,color) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.name = name;
        this.color = color;
    }

    drawUser() {
        let canvas = document.createElement("canvas");
        this.canvas = canvas;
        canvas.id = this.name;
        canvas.className = "square";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.left = this.x;
        canvas.style.top = this.y;

        let ctx = canvas.getContext("2d");
        this.ctx = ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 50, 50);

        $("body").append(this.canvas);
    }

    draw() {
        let canvas = document.createElement("canvas");
        this.canvas = canvas;
        canvas.id = this.name;
        canvas.className = "square";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.left = this.x;
        canvas.style.top = this.y;

        let ctx = canvas.getContext("2d");
        this.ctx = ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 50, 50);

        $("body").append(this.canvas);
    }

    moveRight() {
        this.x += this.speed;

        $(this.canvas).css({
            left: this.x
        })
    }

    moveLeft() {
        this.x -= this.speed;

        console.log(`x location ${this.x} the speed ${this.speed}`);

        $(this.canvas).css({
            left: this.x
        })
    }

    moveDown() {
        this.y += this.speed;

        $(this.canvas).css({
            top: this.y
        })
    }

    moveUp() {
        this.y -= this.speed;

        $(this.canvas).css({
            top: this.y
        })
    }
}

let squareUser = new Square(0, 0, 10, "Player", "blue");
squareUser.drawUser();

$(document).keydown(function(event) {
    if (event.key === "ArrowRight" || event.key === "d") {
        squareUser.moveRight();
    }

    if (event.key === "ArrowLeft" || event.key === "a") {
        squareUser.moveLeft();
    }

    if (event.key === "ArrowDown" || event.key === "s") {
        squareUser.moveDown();
    }

    if (event.key === "ArrowUp" || event.key === "w") {
        squareUser.moveUp();
    }

    if (squareUser.x >= 860) {
        squareUser.x = 840;
    }

    if (squareUser.x < 0) {
        squareUser.x = 20;
    }

    if (squareUser.y >= 800) {
        squareUser.y = 780;
    }

    if (squareUser.y < 0) {
        squareUser.y = 20;
    }
})

let canvas = document.getElementById("canvas"); //Red warning line
canvas.style.position = "fixed";
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "red";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(950, 0);
ctx.stroke(); //Red warning line

let time = 3; //Initial 3 seconds timer 
let timer = setInterval(function() {
    $("h1").text(time);

    time--;

    if (time < 0) {
        clearInterval(timer);
        $("h1, h2").remove();
    }
}, 1000) //Initial 3 seconds timer 

const squareWidth = 50;
const squareHeight = 50;

let moveInterval;
let counter;
let initalTime;

let squares = [];
const numberOfSqueres = 10;

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

for (let i = 0; i < numberOfSqueres; i++) {
    let newSquare = new Square(Math.random() * window.innerWidth - squareWidth, 0, Math.random() * 12, i, getRandomColor());

    squares.push(newSquare);
}

let randomNumber;

setTimeout(function() {
    initalTime = 1;

    counter = setInterval(function() {
        $("p").text(`Points: ${initalTime}`);
    
        initalTime++;
    }, 1000)

    $("#prompt-intro").fadeOut("fast");

    $(canvas).remove();
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].draw();
    }

    moveInterval = setInterval(function() {   
        randomNumber = Math.random() * window.innerWidth;
        
        for (let i = 0; i < squares.length; i++) {
            let elements = squares[i];

            squares[i].moveDown();
            //squares[i].moveLeft();

            if (elements.y > window.innerHeight) {
                elements.y = 0;
            }

            /*if (squares[i].x < 0 || squares[i].y > window.innerHeight) {
                squares[i].x = window.innerWidth;
                squares[i].y = 0;
            }*/
        }

        collisionDetection();
    }, 30);
}, 4000)

$("button").click(function() {
    location.reload();
})

function collisionCondition(squareOne, squareTwo) {
    if (Math.abs(squareOne.x - squareTwo.x) <= squareWidth&& Math.abs(squareOne.y - squareTwo.y) <= squareHeight) {
        return true;
    }

    return false;
}

function collisionDetection() {
    
    for (let i = 0; i < squares.length; i++) {
        if (collisionCondition(squareUser, squares[i])) {
        
            clearInterval(moveInterval);
            clearInterval(counter);
    
            $("#prompt").fadeIn("fast"); 
        } 
    }
}