function preload(){

}

function setup(){
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
}
function draw(){
image(video, 100,100, 400,300)
fill("red")
circle(50, 50, 60);
circle(50,460,60)
circle(550,50,60)
circle(550,460,60)
fill("green")
rect(78,50,445,20)
rect(40,80 ,20,350)
rect(545,80,20,350)
rect(78,450,445,20)
}

function take_snapshot(){
    save("filter.png")
}