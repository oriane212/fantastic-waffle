function setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}


var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if (typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$('#canvas').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(mouseX,mouseY);
});

$('#canvas').mousemove(function(e){
    if(paint){
        addClick(mouseX, mouseY);
        redraw();
    }
});

$('#canvas').mouseup(function(e){
    paint = false;
});

$('#canvas').mouseleave(function(e){
    paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x,y,dragging){
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i=0; i < clickX.length; i++){
        context.beginPath();
        if (clickDrag[i] && i){
            context.moveTo(clickX[i-1],clickY[i-1]);
        }
        else {
            context.moveTo(clickX[i]-1, clickY[i]-1);
        }

        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}
