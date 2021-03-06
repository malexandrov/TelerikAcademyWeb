﻿
var ctx = document.getElementById("canvas").getContext("2d");
var roundedShape = function (x, y, w, h, fillColor, strokeColor) {
    var mx = x + (w / 2);
    var my = y + (h / 2);

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;

    ctx.moveTo(x, my);
    ctx.quadraticCurveTo(x, y, mx, y);
    ctx.quadraticCurveTo(x + w, y, x + w, my);
    ctx.quadraticCurveTo(x + w, y + h, mx, y + h);
    ctx.quadraticCurveTo(x, y + h, x, my);
    ctx.fill();
    ctx.stroke();
}

var triangle = function (x, y, w, h, fillColor, strokeColor) {
    ctx.beginPath();
    ctx.moveTo(x + (w / 2), h); // Top Corner
    ctx.lineTo(x + w, y); // Bottom Right
    ctx.lineTo(x, y); // Bottom Left
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.fillStyle = fillColor;
    ctx.fill();
}

// head
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = "#90CAD7";
ctx.strokeStyle = "#24525D";
ctx.arc(150, 300, 75, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

// nose
ctx.beginPath();
ctx.strokeStyle = "#24525D";
ctx.moveTo(137, 275);
ctx.lineTo(120, 310);
ctx.moveTo(120, 310);
ctx.lineTo(140, 310);
ctx.stroke();

// eyes
// left
roundedShape(97, 265, 25, 17, "#90CAD7", "#24525D");
// right
roundedShape(151, 265, 25, 17, "#90CAD7", "#24525D");

// inner eyes
// left
roundedShape(103, 268, 5, 11, "#24525D", "#24525D");
// right
roundedShape(157, 268, 5, 11, "#24525D", "#24525D");

// mouth
ctx.rotate(9 * Math.PI / 180);
roundedShape(160, 300, 60, 20, "#90CAD7", "#24525D");

// hat
ctx.setTransform(1, 0, 0, 1, 0, 0);
roundedShape(65, 212, 168, 38, "#396693", "#252422");

ctx.beginPath();
ctx.fillStyle = "#396693";
ctx.moveTo(107, 212);
ctx.lineTo(107, 122);
ctx.moveTo(190, 212);
ctx.lineTo(190, 122);
ctx.fillRect(108, 122, 81, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(107, 212);
ctx.quadraticCurveTo(145, 230, 190, 212)
ctx.stroke();
// upper part
roundedShape(106, 105, 84, 38, "#396693", "#252422");

// bicycle
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.beginPath();
ctx.fillStyle = "#90CAD7";
ctx.strokeStyle = "#24525D";
ctx.arc(150, 600, 62, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 600);
ctx.lineTo(232, 502);
ctx.moveTo(150, 600);
ctx.lineTo(272, 600);
ctx.moveTo(232, 502);
ctx.lineTo(432, 502);
ctx.moveTo(432, 502);
ctx.lineTo(272, 600);
ctx.moveTo(222, 472);
ctx.lineTo(272, 600);
ctx.moveTo(198, 472);
ctx.lineTo(247, 472);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#90CAD7";
ctx.arc(452, 600, 62, 0, Math.PI * 2, false);
ctx.moveTo(420, 457);
ctx.lineTo(452, 600);
ctx.moveTo(420, 457);
ctx.lineTo(462, 407);
ctx.moveTo(420, 457);
ctx.lineTo(350, 470);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(272, 600, 20, 0, Math.PI * 2, false);
ctx.moveTo(257, 585);
ctx.lineTo(242, 565);
ctx.moveTo(287, 615);
ctx.lineTo(302, 635);
ctx.stroke();

// house
ctx.beginPath();
ctx.fillStyle = "#975B5B";
ctx.strokeStyle = "black";
ctx.rect(550, 300, 350, 300);
ctx.fill();
ctx.stroke();

// door
ctx.beginPath();
ctx.moveTo(590, 600);
ctx.lineTo(590, 490);
ctx.moveTo(640, 600);
ctx.lineTo(640, 475);
ctx.moveTo(690, 600);
ctx.lineTo(690, 490);
ctx.moveTo(590, 490);
ctx.quadraticCurveTo(640, 463, 690, 490);
ctx.stroke();

ctx.beginPath();
ctx.arc(655, 560, 5, 0, Math.PI * 2, false);
ctx.moveTo(630, 560);
ctx.arc(625, 560, 5, 0, Math.PI * 2, false);
ctx.stroke();

// windows
ctx.beginPath();
ctx.fillStyle = "black";
ctx.rect(575, 390, 60, 45);
ctx.rect(575, 335, 60, 45);
ctx.rect(645, 335, 60, 45);
ctx.rect(645, 390, 60, 45);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(625, 690);
ctx.rect(745, 390, 60, 45);
ctx.rect(745, 335, 60, 45);
ctx.rect(815, 335, 60, 45);
ctx.rect(815, 390, 60, 45);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(625, 690);
ctx.rect(745, 530, 60, 45);
ctx.rect(745, 475, 60, 45);
ctx.rect(815, 475, 60, 45);
ctx.rect(815, 530, 60, 45);
ctx.fill();
ctx.stroke();

// roof
triangle(550, 300, 350, 100, "#975B5B", "black");
// chimney
ctx.beginPath();
ctx.moveTo(840, 265);
ctx.lineTo(840, 150);
ctx.moveTo(800, 265);
ctx.lineTo(800, 150);
ctx.closePath();
ctx.stroke();

ctx.fillRect(801.3, 150, 37.6, 140);
roundedShape(800, 140, 40, 15);