var table;
var prince;
var n = 0;
var imgWidth = 210;
var imgHeight = 300;
var shown = 1000;
const scroll = document.getElementById("scroll-element");


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

window.onload = scroll.scrollLeft = canvas.width/2;

table  = document.getElementById("drugtable");
prince = table.options[table.selectedIndex].text;


function instill() {
    document.getElementById("selected").value = prince;
    n += 1;
    scroll.scrollLeft = canvas.width / 2 + imgWidth * (n-1);
    roll()
    imgTag = new Image();
    
    ctx.translate(imgWidth, 0)
    if (table.selectedIndex == 0) {
      imgTag.src = "images/co.jpg"; // load image
    } else if (table.selectedIndex == 1) {
      imgTag.src = "images/cv.jpg"; // load image
    } else if (table.selectedIndex == 2) {
      imgTag.src = "images/pv.jpg"; // load image
    } else if (table.selectedIndex == 3) {
      imgTag.src = "images/epi.jpg"; // load image
    } else if (table.selectedIndex == 4) {
      imgTag.src = "images/nepi.jpg"; // load image
    } else if (table.selectedIndex == 5) {
      imgTag.src = "images/iso.jpg"; // load image
    } else if (table.selectedIndex == 6) {
      imgTag.src = "images/ach.jpg"; // load image
    } else if (table.selectedIndex == 7) {
      imgTag.src = "images/his.jpg"; // load image
    } else if (table.selectedIndex == 8) {
      imgTag.src = "images/eph.jpg"; // load image
    } else if (table.selectedIndex == 9) {
      imgTag.src = "images/phe.jpg"; // load image
    } else if (table.selectedIndex == 10) {
      imgTag.src = "images/pro.jpg"; // load image
    } else if (table.selectedIndex == 11) {
      imgTag.src = "images/cim.jpg"; // load image
    } else if (table.selectedIndex == 12) {
      imgTag.src = "images/atr.jpg"; // load image
    }
    imgTag.onload = animate;
}
function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctx.drawImage(imgTag, canvas.width/2 + shown - 1.5*imgWidth, 30, imgWidth, imgHeight); // draw image at current position
    ctx.drawImage(imgTag, x, y); // draw image at current position
}
function roll(){
    scroll.scrollLeft += 10;
    if (scroll.scrollLeft < canvas.width/2 + imgWidth*n){
        requestAnimationFrame(roll);
    }
}


function myFunction(x) {
  if (x.matches) { // If media query matches
    shown = 913;
    } else {
    // document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
