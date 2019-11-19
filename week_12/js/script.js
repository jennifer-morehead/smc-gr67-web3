/* JAVASCRIPT */

/*	     __                           
        / /___ ___ __________________/
   __  / / __ `__ \ ___Jennifer_____/
  / /_/ / / / / / /____Morehead____/
  \____/_/ /_/ /_/________________/ 
*/


var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballColor = 'rgb(0, 0,0)';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;

function animate() {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
	// ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    // ctx.strokeStyle = 'black';
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();

    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0) {
        directionRight = !directionRight;
    }

    if (directionRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }


    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }

    if (directionDown) {
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }


    window.requestAnimationFrame(animate);
}

animate();
