class Rect{
    constructor(color, x, y) {
        this.color = color;
        this.x = x; 
        this.y = y; 
        this.vX = 2;
        this.vY = 2;
        this.a = Math.floor(Math.random() * ( 100 - 40 + 1)) + 40;
        this.square = Math.pow(this.a, 2);
    }


    draw () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.a, this.a);
    }

    static createRect() {
        let rect = new Rect(rgb(),0,0);
        rect.draw();
        count.rectangles++;
        newLi();
        figures.push(rect);
    }
}
class Circle{
    constructor(color, x, y){
        this.color = color; 
        this.x = x; 
        this.y = y; 
        this.vX = 2;
        this.vY = 2;
        this.radius = Math.floor(Math.random() * ( 50 - 20 + 1)) + 20;
        this.square = Math.PI*Math.pow(this.radius, 2);
    }


    draw () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.fillStyle = this.color;
        context.closePath();
        context.fill();
    }

    static createCircle() {
        let circle = new Circle(rgb(),50,50);
        circle.draw();
        count.circles++;
        newLi();
        figures.push(circle);
    }
}
const count = {'circles':0,'rectangles':0};
const figures = [];


function initCanvas() {
    c = document.getElementById("myCanvas");
    c.width = 850;
    c.height = 600;

    context = c.getContext("2d");
    context.fillStyle = "#FCF9E3";
    context.strokeStyle = "#000000";
    context.rect(0,0,c.width,c.height);
    context.stroke();
    context.fill();

}
function rgb(){
    const r =  Math.floor(Math.random() * 255);
    const g =  Math.floor(Math.random() * 255);
    const b =  Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }


initCanvas();
setTimeout( function timer() {

    if(count.circles<10&&count.rectangles<10) {
        const random = Math.round(Math.random());
        if(random) {
            Circle.createCircle();
        } else {
            Rect.createRect();
        }
        setTimeout(timer,5000);
    } 
    console.log(count.circles,count.rectangles);
    if(count.circles>=10&&count.rectangles<10) {Rect.createRect(); setTimeout(timer,5000);}
    if(count.rectangles>=10&&count.circles<10) {Circle.createCircle(); setTimeout(timer,5000);
    } else {
        return;
    }

}, 500);

function update() {

    this.x += this.vX;
    this.y += this.vY;

    if(this instanceof Rect) {
        if(this.x < 0 || (this.x + this.a) >= c.width) this.vX = -this.vX;
        if(this.y < 0 || (this.y + this.a) >= c.height) this.vY = -this.vY;
    }

    if(this instanceof Circle) {
        if((this.x - this.radius) < 0 || (this.x + this.radius) >= c.width) this.vX = -this.vX;
        if(this.y - this.radius < 0 || (this.y + this.radius) >= c.height) this.vY = -this.vY;
    }
}

function newLi() {
    let li = document.createElement('li');
    li.textContent = `${count.circles}:${count.rectangles}`;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

setInterval(function () {

    context.clearRect(0,0,850,600);
    initCanvas();
    figures.forEach(figure => {
        update.call(figure);
        figure.draw();
    });
},10);


// setInterval(,0)




