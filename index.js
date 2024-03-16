//for selecting 1st button.
/*	document.querySelector("button").addEventListener("click", handleClick);     
	function handleClick(){
		alert("I got clicked")
	}
*/
//to add event listener to all the buttons '.set' with querySelectorAll cannot be used 
//as it gives alert when clicked horizontally outside the button (div is block element)


//detecting button events
var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numOfDrumButtons; i++){

	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		//alert("I got clicked");

		//console.log(this.innerHTML);

		//this.style.color = "white";

		// new Audio()
		/* var audio = new Audio("sounds/tom-1.mp3");
		   audio.play(); */

		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);	
	   //the innerHTML of the button that got pressed & send that to makeSound in order to play the relevent sound
			
		buttonAnimation(buttonInnerHTML);

	});
}


//detecting keyboard press
document.addEventListener("keypress", function(event){		

	//The event object is always passed to the handler and used to pass information about the event that has happened. 
	//It is always passed as first object/variable.
	
	//The key property returns the key that was pressed when the event occured.
	makeSound(event.key);

	buttonAnimation(event.key);
});


function makeSound(key){

	switch(key){

			case "w": 
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;

			case "a": 
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;

			case "s": 
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;

			case "d": 
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;

			case "j": 
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;

			case "k": 
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;

			case "l": 
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
				break;

			default:  console.log(buttonInnerHTML);
		}
}

	
//adding animation
function buttonAnimation(currentKey){

	var activeButton = document.querySelector("."+ currentKey); 		//like (.w)

	activeButton.classList.add("pressed");

	setTimeout(function(){

		activeButton.classList.remove("pressed");
	}, 100);	
}