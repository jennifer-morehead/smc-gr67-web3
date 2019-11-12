/* JAVASCRIPT */

/*	     __                           
        / /___ ___ __________________/
   __  / / __ `__ \ ___Jennifer_____/
  / /_/ / / / / / /____Morehead____/
  \____/_/ /_/ /_/________________/ 
*/


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//draw ball
var ball = {
	x: 300,
	y: 200,
	vx: 5, //velocity
	vy: 2, //velocity
	radius: 25,
	color: 'rgba(15, 165, 255, .5)',
	draw: function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

//section of canvas for animation
var animWidth = 200;
var animHeight = 250;
var radius = 25

function draw() {
	ctx.clearRect(200, 150, animWidth, animHeight);
	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;
	ball.vy *= .99; //acceleration
	ball.vy += .25; //acceleration

	//boundaries - since ball x,y is in center, must factor width of ball
	if (ball.y + ball.vy > (400 - radius) ||
		ball.y + ball.vy < (200 - radius)) {
		ball.vy = -ball.vy;
	}
	if (ball.x + ball.vx > (400 - radius) ||
		ball.x + ball.vx < (200 + radius)) {
		ball.vx = -ball.vx;
	}

	raf = window.requestAnimationFrame(draw);
}

//trigger animation with mouseover canvas
canvas.addEventListener('mouseover', function (e) {
	raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function (e) {
	window.cancelAnimationFrame(raf);
});

ball.draw();



//draw text
ctx.font = 'bold 36px sans-serif';
ctx.fillStyle = 'rgba(15, 165, 255, 1)';
ctx.fillText('THIS IS NOT', 0, 26);

//draw triange for A
ctx.beginPath();
ctx.moveTo(350, 0);
ctx.lineTo(400, 100);
ctx.lineTo(300, 100);
ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
//draw semi-circle for R
ctx.beginPath();
ctx.arc(425, 40, 40, -1.55, .5 * Math.PI);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw triange for R
ctx.beginPath();
ctx.moveTo(425, 40);
ctx.lineTo(500, 100);
ctx.lineTo(425, 100);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw v rectangle for T
//ctx.rect(x, y, width, height);
ctx.rect(500, 0, 100, 30);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw h rectangle for T
//ctx.rect(x, y, width, height);
ctx.rect(535, 0, 30, 100);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw bottom left circle
ctx.beginPath();
ctx.arc(60, 340, 60, 0, 2 * Math.PI);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw bottom left triagnle
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(150, 225);
ctx.lineTo(150, 400);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//draw balancing triagnle
ctx.beginPath();
ctx.moveTo(75, 150);
ctx.lineTo(200, 225);
ctx.lineTo(75, 225);
// ctx.fillStyle = 'rgba(204, 20, 99, .5)';
ctx.fill();

//add image
//cut out a section of the immage
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
var img = new Image(); // Create new img element
img.addEventListener('load', function () {
	ctx.drawImage(img, 450, 100, 150, 300, 450, 100, 150, 300); // execute drawImage statements here
}, false);
img.src = 'images/woman-wall.jpg'; // Set source path