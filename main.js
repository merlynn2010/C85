canvas = document.getElementById('myCanvas');

ctx = canvas.getContext('2d');

r_x = 10;
r_y = 10;

r_width = 70;
r_height = 70;

background_image = 'mars.jpg';
rover_image = 'rover.png';

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, r_x, r_y, r_width, r_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
if(keyPressed == '38')
{
    up();
}
if(keyPressed == '40')
{
    down();
}
if(keyPressed == '37')
{
    left();
}
if(keyPressed == '39')
{
    right();
}
}
function up()
{
    if(r_y >=0)
    {
        r_y -= 10;
        uploadBackground();
        uploadRover();
    }
}
function down()
{
    if(r_y <=500)
    {
        r_y += 10;
        uploadBackground();
        uploadRover();
    }
}
function left()
{
    if(r_x >=0)
    {
        r_x -= 10;
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if(r_x <=700)
    {
        r_x += 10;
        uploadBackground();
        uploadRover();
    }
}
