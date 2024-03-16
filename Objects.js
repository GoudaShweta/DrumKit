//Object
var houseKeeper1 = {
	yearsOfExp: 12,
	name: "Jame",
	cleaningRepertoire: ["bathroom","lobby","bedroom"]
}
//in console --> houseKeeper1;
/*	{yearsOfExp: 12, name: 'Jame', cleaningRepertoire: Array(3)}
	cleaningRepertoire: (3) ['bathroom', 'lobby', 'bedroom']
	name: "Jame"
	yearsOfExp: 12
	[[Prototype]]: Object */
//console.log(houseKeeper1.name);
//Jame


var bellBoy = {
	name:"Timmy",
	age: 19,
	hasWorkPermit: true,
	languages:["French","English"]
}
alert("Hello, my name is "+ bellBoy.name);


//Function associated with Object
var bellBoy = {
	name:"Timmy",
	age: 19,
	hasWorkPermit: true,
	languages:["French","English"]
	moveSitecase: function(){					
		alert("May I take your suitecase?");
		pickUpSuitcase();
		move();
	}
}
//call method
bellBoy1.moveSuitecase();



//Constructor Function
function BellBoy (name, age, hasWorkPermit, languages){
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
}
//Initialise Object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Jimmy", 20, true, ["German", "English"]);


function BellBoy (name, age, hasWorkPermit, languages){
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
	this.moveSuitecase = function(){
		alert("May I take your suitecase?")
	}
}
//var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
//bellBoy1.moveSuitecase();



function Audio (fileLocation){
	this.fileLocation = fileLocation;
	this.play = function(){
		//Tap into audio hardware
		//Check the file at fileLocation exists
		//Check the file at fileLocation is a sound file
		//Play the file at fileLocation	
	}
}
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();