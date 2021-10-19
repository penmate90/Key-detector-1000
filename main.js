// Create a reference for the canvas
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
var speckey=[18,17,27]

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((keyPressed == 17||18||27||16||20||9||8) ){
		specialkey();
		console.log("spec key")
		

	}

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
	aplhabetkey();
	console.log("alph key");
}
	else if (keyPressed >=48 && keyPressed<=57){
		numberkey();
		console.log("num key");
	}
	else if (keyPressed  >=37 && keyPressed<=40){
		arrowkey();
		console.log("arr key ");
	}
	 
	else {
		otherkey();
		console.log("other key");
		document.getElementById("key_name").innerHTML="You pressed symbol or other";
	}
	 
	
 


		if (keyPressed == 65) {
			document.getElementById("key_name").innerHTML="you pressed a or A";
          console.log("a pressed")
		  
		  

		}
		 if (keyPressed == 66) {
			document.getElementById("key_name").innerHTML="you pressed b or B";
			console.log("b pressed")
			

		}
		if (keyPressed == 67) {
			document.getElementById("key_name").innerHTML="you pressed c or C";
          console.log("c pressed")
		  
		  

		}
		 if (keyPressed == 68) {
			document.getElementById("key_name").innerHTML="you pressed d or D";
			console.log("b pressed")
			

		}
		if (keyPressed == 69) {
			document.getElementById("key_name").innerHTML="you pressed e o E";
          console.log("e pressed")
		  
		  

		}
		 if (keyPressed == 70) {
			document.getElementById("key_name").innerHTML="you pressed f or F";
			console.log("f pressed")
			

		}
		if (keyPressed == 71) {
			document.getElementById("key_name").innerHTML="you pressed g or G";
          console.log("g pressed")
		  
		  

		}
		 if (keyPressed == 72) {
			document.getElementById("key_name").innerHTML="you pressed h or H";
			console.log("h pressed")
			

		}
		if (keyPressed == 73) {
			document.getElementById("key_name").innerHTML="you pressed i or I";
          console.log("i pressed")
		  
		  

		}
		 if (keyPressed == 74) {
			document.getElementById("key_name").innerHTML="you pressed j or J";
			console.log("j pressed")
			

		}
		if (keyPressed == 75) {
			document.getElementById("key_name").innerHTML="you pressed k or K ";
          console.log("k pressed")
		  
		  

		}
		 if (keyPressed == 76) {
			document.getElementById("key_name").innerHTML="you pressed l or L";
			console.log("l pressed")
			

		}
		if (keyPressed == 77) {
			document.getElementById("key_name").innerHTML="you pressed m or M";
          console.log("m pressed")
		  
		  

		}
		 if (keyPressed == 78) {
			document.getElementById("key_name").innerHTML="you pressed n or N";
			console.log("n pressed")
			

		}
		if (keyPressed == 79) {
			document.getElementById("key_name").innerHTML="you pressed o or O";
          console.log("o pressed")
		  
		  

		}
		 if (keyPressed == 80) {
			document.getElementById("key_name").innerHTML="you pressed p or P";
			console.log("p pressed")
			

		}
		if (keyPressed == 81) {
			document.getElementById("key_name").innerHTML="you pressed q or Q";
          console.log("q pressed")
		  
		  

		}
		 if (keyPressed == 82) {
			document.getElementById("key_name").innerHTML="you pressed r or R";
			console.log("r pressed")
			

		}
		if (keyPressed == 83) {
			document.getElementById("key_name").innerHTML="you pressed s or S";
          console.log("s pressed")
		  
		  

		}
		 if (keyPressed == 84) {
			document.getElementById("key_name").innerHTML="you pressed t or T";
			console.log("t pressed")
			

		}
		if (keyPressed == 85) {
			document.getElementById("key_name").innerHTML="you pressed u or U";
          console.log("u pressed")
		  
		  

		}
		 if (keyPressed == 86) {
			document.getElementById("key_name").innerHTML="you pressed v or V";
			console.log("v pressed")
			

		}
		if (keyPressed == 87) {
			document.getElementById("key_name").innerHTML="you pressed w or W";
          console.log("w pressed")
		  
		  

		}
		 if (keyPressed == 88) {
			document.getElementById("key_name").innerHTML="you pressed x or X";
			console.log("x pressed")
			

		}
		if (keyPressed == 89) {
			document.getElementById("key_name").innerHTML="you pressed y or Y";
          console.log("y pressed")
		  
		  

		}
		 if (keyPressed == 90) {
			document.getElementById("key_name").innerHTML="you pressed  z or Z";
			console.log("z pressed")
			

		}
		if (keyPressed == 48) {
			document.getElementById("key_name").innerHTML="you pressed 0";
		  console.log("0 pressed")
		  
		  
	
		}
		 if (keyPressed == 49) {
			document.getElementById("key_name").innerHTML="you pressed  1";
			console.log("1 pressed")
			
	
		}
		if (keyPressed == 50) {
			document.getElementById("key_name").innerHTML="you pressed 2";
		  console.log("2 pressed")
		  
		  
	
		}
		 if (keyPressed == 51) {
			document.getElementById("key_name").innerHTML="you pressed  3";
			console.log("3 pressed")
			
	
		}if (keyPressed == 52) {
			document.getElementById("key_name").innerHTML="you pressed 4";
		  console.log("4 pressed")
		  
		  
	
		}
		 if (keyPressed == 53) {
			document.getElementById("key_name").innerHTML="you pressed  5";
			console.log("5 pressed")
			
	
		}if (keyPressed == 54) {
			document.getElementById("key_name").innerHTML="you pressed 6";
		  console.log("6 pressed")
		  
		  
	
		}
		 if (keyPressed == 55) {
			document.getElementById("key_name").innerHTML="you pressed  7";
			console.log("7 pressed")
			
	
		}if (keyPressed == 56) {
			document.getElementById("key_name").innerHTML="you pressed 8";
		  console.log("8 pressed")
		  
		  
	
		}
		 if (keyPressed == 57) {
			document.getElementById("key_name").innerHTML="you pressed  9";
			console.log("9 pressed")
			
	
		}
		if (keyPressed == 37) {
			document.getElementById("key_name").innerHTML="you pressed left arrow";
		  console.log("left arr pressed")
		  
		  
	
		}
		 if (keyPressed == 38) {
			document.getElementById("key_name").innerHTML="you pressed up arrow";
			console.log("up arr pressed")
			
	
		}if (keyPressed == 39) {
			document.getElementById("key_name").innerHTML="you pressed right arrow ";
		  console.log("right arr pressed")
		  
		  
	
		}
		 if (keyPressed == 40) {
			document.getElementById("key_name").innerHTML="you pressed down arrow";
			console.log("down arr pressed")
			
	
		}if (keyPressed == 17) {
			document.getElementById("key_name").innerHTML="you pressed ctrl";
		  console.log("ctrl pressed")
		  
		  
	
		}
		 if (keyPressed == 18) {
			document.getElementById("key_name").innerHTML="you pressed alt";
			console.log("alt pressed")
			
	
		}
		if (keyPressed == 16) {
			document.getElementById("key_name").innerHTML="you pressed shift";
		  console.log("shift pressed")
		  
		  
	
		}
		 if (keyPressed == 20) {
			document.getElementById("key_name").innerHTML="you pressed caps lock";
			console.log("caps lock pressed")
			
	
		}
		if (keyPressed == 9) {
			document.getElementById("key_name").innerHTML="you pressed tab";
		  console.log("tab pressed")
		  
		  
	
		}
		 if (keyPressed == 27) {
			document.getElementById("key_name").innerHTML="you pressed esc";
			console.log("esc pressed")
			
	
		}if (keyPressed == 8) {
			document.getElementById("key_name").innerHTML="you pressed backspace";
		  console.log("backspace pressed")
		  
		  
	
		}
		


		
		
			
	
		}
	
	
	
		
		

		


function aplhabetkey()
{
	//upload respective image with the message. 
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
