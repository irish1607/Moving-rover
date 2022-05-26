canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  rover_width = 100;
   rover_height = 90;
   marsimagesarray=["mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
   randomnumber=Math.floor(Math.random()*4);
   console.log(randomnumber);
    background_image = marsimagesarray[randomnumber];
     rover_image = "rover.png";
      rover_x = 10; rover_y = 10;
     background_imgTag = ""; 
function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress = e.keyCode;
console.log(keypress);
if (keypress=='38') {
 up();   
}  
if (keypress=='40') {
    down();   
            
}
if (keypress=='37') {
    left();   
   }
   if (keypress=='39') {
    right();   
   }      
}
function up()
{
if(rover_y>=0)
{
    rover_y = rover_y-10;
    uploadBackground();
    uploadrover();

}
}
function down()
{
if(rover_y<=550)
{
    rover_y = rover_y+10;
    uploadBackground();
    uploadrover();
    
}
}

function right()
{
if(rover_x<=650)
{
    rover_x = rover_x+10;
    uploadBackground();
    uploadrover();
    
}
}

function left()
{
if(rover_x>=0)
{
    rover_x = rover_x-10;
    uploadBackground();
    uploadrover();
    
}
}