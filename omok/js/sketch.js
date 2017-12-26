let counter = 0;

function setup() {
  noCanvas();
  // createCanvas(300, 300);
  // angleMode(DEGREES);

  var timer = select('#timer');
  timer.html('0');

  function timeIt() {
    counter++;
    timer.html(counter);
  }
  setInterval(timeIt, 1000);

}

function draw() {

  // background(0);
  // translate(150, 150);
  // rotate(-90);
  // let hr = hour();
  // let mn = minute();
  // let sc = second();

  // strokeWeight(15);
  // stroke(255, 100, 150);
  // noFill();
  // let end = map(sc, 0, 15, 0, 360);
  // arc(0, 0, 200, 200, 0, end);


  // fill(255);
  // noStroke();
  // text(hr + ':' + mn + ":" + sc, 10, 200);
}