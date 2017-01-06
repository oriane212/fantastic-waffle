var points = [];

function setup(){
    var myCanvas = createCanvas(640,1136);
    myCanvas.parent('canvasDiv');
    $(myCanvas.canvas).css("border-style",'solid');
    $(myCanvas.canvas).css("border-width",'5px');
    console.log(myCanvas);
    line(15,25,70,90);
}

function mouseDragged(){
    //fill(0);
    //ellipse(mouseX,mouseY,3,3);
    points.push([mouseX, mouseY]);
    //clear canvas
    drawPolyline(points);
}

function drawPolyline(points){
    for (var i = 0; i < points.length-1; i++){
        var point1 = points[i];
        var x1 = point1[0];
        var y1 = point1[1];
        var point2 = points[i+1];
        var x2 = point2[0];
        var y2 = point2[1];
        line(x1,y1,x2,y2);
    }
}

function mouseReleased(){
    points = [];
}