

var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_object="";

function player_update(){
fabric.Image.fromURL("babygroot.png", function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
})
}


function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
    block_object=Img;
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    })
    }
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
var keypressed=e.keyCode;
 console.log(keypressed);
if (e.shiftKey==true && keypressed=="80") 
{
console.log("p and shift pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if (e.shiftKey==true && keypressed=="77") 
{
console.log("m and shift pressed together");
block_image_width=block_image_width-10;
block_image_height=block_image_height-10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(keypressed=="37")
{
left();
console.log("left");
}

if(keypressed=="38")
{
up();
console.log("up");
}

if(keypressed=="39")
{
right();
console.log("right");
}

if(keypressed=="40")
{
down();
   console.log("down");
}

if(keypressed=="87")
{
new_image("babygroot.png");
console.log("w pressed");
}

if(keypressed=="70")
{
new_image("hulk_face.png");
console.log("f pressed");
}
if(keypressed=="69")
{
new_image("hulk_left_hand.png");
console.log("e pressed");
}
if(keypressed=="70")
{
new_image("hulk_right_hand.png");
console.log("f pressed");
}

if(keypressed=="71")
{
new_image("hulkd_body.png");
console.log("g pressed");
}

if(keypressed=="72")
{
new_image("hulk_legs.png");
console.log("h pressed");
}
if(keypressed=="73")
{
new_image("ironman_face.png");
console.log("i pressed");
}
if(keypressed=="74")
{
new_image("ironman_body.png");
console.log("j pressed");
}
if(keypressed=="75")
{
new_image("ironman_left_hand.png");
console.log("k pressed");
}
if(keypressed=="76")
{
new_image("ironman_right_hand.png");
console.log("l pressed");
}
if(keypressed=="77")
{
new_image("ironman_legs.png");
console.log("m pressed");
}
if(keypressed=="78")
{
new_image("spiderman_face.png");
console.log("n pressed");
}
if(keypressed=="79")
{
new_image("spiderman_body.png");
console.log("o pressed");
}
if(keypressed=="80")
{
new_image("spiderman_legs.png");
console.log("p pressed");
}
if(keypressed=="81")
{
new_image("spiderman_right_hand.png");
console.log("q pressed");
}
if(keypressed=="83")
{
new_image("spiderman_left_hand.png");
console.log("s pressed");
}
if(keypressed=="84")
{
new_image("thor_face.png");
console.log("t pressed");
}
if(keypressed=="85")
{
new_image("thor_left_hand.png");
console.log("u pressed");
}
if(keypressed=="86")
{
new_image("thor_right_hand.png");
console.log("v pressed");
}
}

function up()
{
    if(player_y >=0)
  {
     player_y = player_y - block_image_height;
     console.log("block image height =" + block_image_height);
     console.log("When Up Arrow key is pressed, X =  " +player_x+ " , Y ="+player_y);
     canvas.remove(player_object);
     player_update();
  }
}

function down()
{
    if(player_y <=500)
  {
     player_y = player_y + block_image_height;
     console.log("block image height =" + block_image_height);
     console.log("When Down Arrow key is pressed, X =  " +player_x+ " , Y ="+player_y);
     canvas.remove(player_object);
     player_update();
  }
}

function left()
{
    if(player_x >0)
  {
     player_x = player_x - block_image_width;
     console.log("block image width =" + block_image_width);
     console.log("When Left Arrow key is pressed, X =  " +player_x+ " , Y ="+player_y);
     canvas.remove(player_object);
     player_update();
  }
}

function right()
{
    if(player_y <=850)
  {
     player_x = player_x + block_image_width;
     console.log("block image height =" + block_image_width);
     console.log("When Right Arrow key is pressed, X =  " +player_x+ " , Y ="+player_y);
     canvas.remove(player_object);
     player_update();
  }
}
