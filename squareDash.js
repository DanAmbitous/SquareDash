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
        canvas.width = 1000;
        canvas.height = 1000;
        canvas.style.position = "fixed";
        canvas.style.left = this.x;
        canvas.style.top = this.y;

        let ctx = canvas.getContext("2d");
        this.ctx = ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 25, 25);

        $("body").append(this.canvas);
    }

    draw() {
        let canvas = document.createElement("canvas");
        this.canvas = canvas;
        canvas.id = this.name;
        canvas.className = "square";
        canvas.width = 1000;
        canvas.height = 1000;
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
squareUser.draw();

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

let canvas = document.getElementById("canvas");
canvas.style.position = "fixed";
let ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(950, 0);
ctx.stroke();

let time = 3;

let timer = setInterval(function() {
    $("h1").text(time);

    time--;

    if (time < 0) {
        clearInterval(timer);
        $("h1, h2").remove();
    }
}, 1000)

let squareOne;
let squareTwo;
let squareThree;
let squareFour;
let squareFive;
let squareSix;
let squareSeven;
let squareEight;
let squareNine;

let moveInterval;
let counter;
let initalTime;

setTimeout(function() {
    $(canvas).remove();

    squareOne = new Square(1, 0, 10, "ProgramOne", "red");
    squareOne.draw();
    
    squareTwo = new Square(100, 0, 5, "ProgramTwo", "green");
    squareTwo.draw();
    
    squareThree = new Square(200, 0, 12, "ProgramThree", "purple");
    squareThree.draw();
    
    squareFour = new Square(300, 0, 8, "ProgramFour", "lime");
    squareFour.draw();
    
    squareFive = new Square(400, 0, 3, "ProgramFive", "magenta");
    squareFive.draw();
    
    squareSix = new Square(500, 0, 12, "ProgramSix", "brown");
    squareSix.draw();
    
    squareSeven = new Square(600, 0, 8, "ProgramSeven", "black");
    squareSeven.draw();
    
    squareEight = new Square(700, 0, 3, "ProgramEight", "cyan");
    squareEight.draw();
    
    squareNine = new Square(800, 0, 10, "ProgramNine", "orange");
    squareNine.draw();

moveInterval = setInterval(function() {
        squareOne.moveDown();   
        if (squareOne.y >= 800) {
            squareOne.y = 0;
        }
    
        squareTwo.moveDown();
        if (squareTwo.y >= 800) {
            squareTwo.y = 0;
        }
    
        squareThree.moveDown();
        if (squareThree.y >= 800) {
            squareThree.y = 0;
        }
    
        squareFour.moveDown();
        if (squareFour.y >= 800) {
            squareFour.y = 0;
        }
    
        squareFive.moveDown();
        if (squareFive.y >= 800) {
            squareFive.y = 0;
        }
    
        squareSix.moveDown();
        if (squareSix.y >= 800) {
            squareSix.y = 0;
        }
    
        squareSeven.moveDown();
        if (squareSeven.y >= 800) {
            squareSeven.y = 0;
        }
    
        squareEight.moveDown();
        if (squareEight.y >= 800) {
            squareEight.y = 0;
        }
    
        squareNine.moveDown();
        if (squareNine.y >= 800) {
            squareNine.y = 0;
        }

        collisionDetection();
    }, 30);

    initalTime = 1;

    counter = setInterval(function() {
        $("p").text(`Points: ${initalTime}`);
    
        initalTime++;
    }, 1000)
    let healthBar = document.getElementById("health-bar");
    let hp = healthBar.getContext("2d");

    hp.strokeStyle = "red";
    hp.lineWidth = 10;
    hp.beginPath();
    hp.arc(850, 50, 20, 0, Math.PI * 2, false);
    hp.stroke();

    $("#prompt-intro").fadeOut("fast");
}, 4000)

$("button").click(function() {
    location.reload();
})

let heatlh = 100;
let canvasHP = document.getElementById("health-bar");

if (health === 100) {
    canvasHP
}

function collisionDetection() {
    if (Math.abs(squareUser.x - squareOne.x) <= 50 && Math.abs(squareUser.y - squareOne.y) <= 50) {
        health -= 25;

        


        if (heatlh === 0) {
            clearInterval(moveInterval);
            clearInterval(counter);
    
            $("#prompt").fadeIn("fast");
        }
    }

    if (Math.abs(squareUser.x - squareTwo.x) <= 50 && Math.abs(squareUser.y - squareTwo.y) <= 50) {
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareThree.x) <= 50 && Math.abs(squareUser.y - squareThree.y) <= 50) {
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareFour.x) <= 50 && Math.abs(squareUser.y - squareFour.y) <= 50) {
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareFive.x) <= 50 && Math.abs(squareUser.y - squareFive.y) <= 50) {
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareSix.x) <= 50 && Math.abs(squareUser.y - squareSix.y) <= 50) {
        console.log(`You have crashed with ${squareSix.name} at ${squareUser.x}x ${squareUser.y}y`);
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareSeven.x) <= 50 && Math.abs(squareUser.y - squareSeven.y) <= 50) {
        console.log(`You have crashed with ${squareSeven.name} at ${squareUser.x}x ${squareUser.y}y`);
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareEight.x) <= 50 && Math.abs(squareUser.y - squareEight.y) <= 50) {
        console.log(`You have crashed with ${squareEight.name} at ${squareUser.x}x ${squareUser.y}y`);
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }

    if (Math.abs(squareUser.x - squareNine.x) <= 50 && Math.abs(squareUser.y - squareNine.y) <= 50) {
        console.log(`You have crashed with ${squareNine.name} at ${squareUser.x}x ${squareUser.y}y`);
        clearInterval(moveInterval);
        clearInterval(counter);

        $("#prompt").fadeIn("fast");
    }
}