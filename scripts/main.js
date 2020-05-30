document.getElementById("death").style.visibility = "hidden";
var hiddenNow = false;

function initClock(){

	//init 

	startClock();

	//run every second

	setInterval(startClock, 1000);
}

function removeCrack(){
document.body.style.background = "black";

}



function startClock(){

	var time = [];
	var date = new Date();

	time["hours"] = date.getHours();
	time["minutes"] = date.getMinutes();
	time["seconds"] = date.getSeconds();
	time["amPm"] = "";


//setting variables for different timezones
	hours = time["hours"];
	minutes = time["minutes"];
	seconds = time["seconds"];
	amPm = time["amPm"];

	hourLA = hours - 9;
	amPmLA = "AM";

	hourNYC = hours - 6;
	amPmNYC = "AM";

	hourAMS = hours;
	amPmAMS = "AM";

	hourLONDON = hours - 1;
	amPmLONDON = "AM";

	if (seconds == 0) {

//issue here, runs first and then not anymore, should not run first itme but instead second time

	document.getElementById("death").style.visibility = "visible";
	
	hiddenNow = true;

}

if (seconds == 57 && (document.getElementById("death").style.visibility =="visible")){
console.log("death working");
//only works once changing background image
	document.body.style.backgroundImage = "url('scrackedScreen.jpg')";
	setInterval(removeCrack, 2000);

}

	

//adding 0 infront if under 10

	if(minutes < 10){

			minutes = "0" + minutes;
		}
		if(seconds < 10){

			seconds = "0" + seconds;
		}
		if(minutes == 0){

			minutes = "0" + "0" + minutes;
		}

//convert to 12 hour clock
if (hourLA > 12){
	hourLA = hourLA - 12;

}

if (hourNYC > 12){
	hourNYC = hourNYC - 12;

}

if (hourAMS > 12){
	hourAMS = hourAMS - 12;

}

if (hourLONDON > 12){
	hourLONDON = hourLONDON - 12;

}

if (hours > 12){
	hours = hours - 12;
}


//setting AM and PM
if ( (time["hours"] - 9) > 11){
	amPmLA = "PM";
}
else {

	amPmLA = "AM";
}

if ((time["hours"] - 6) > 11){
	amPmNYC = "PM";
}
else {

	amPmNYC = "AM";
}

if ((time["hours"] - 0) > 11){
	amPmAMS = "PM";
}
else {

	amPmAMS = "AM";
}

if ((time["hours"] - 1) > 11){
	amPmLONDON = "PM";
}
else {

	amPmLONDON = "AM";
}

if (time["hours"] > 11){
	amPm = "PM";

}
else {

	amPm = "AM";
}



//adding 0 infront of date if under 10

		/*
		if(time["hours"] < 10){

			time["hours"] = 0 + time["hours"]
		}
		*/

	




//setting all the times to HTML

	var clock = document.getElementById('clock');
	var clockLA = document.getElementById('clockLA');
	var clockNYC = document.getElementById('clockNYC');
	var clockAMS = document.getElementById('clockAMS');
	var clockLONDON = document.getElementById('clockLONDON');
	var sep   = flashSeperator(time['seconds']);

	clock.innerHTML = hours + sep + minutes + seconds + " " + amPm;

	clockLA.innerHTML = hourLA + ":" + minutes + " " + amPmLA;

	clockNYC.innerHTML = hourNYC + ":" + minutes + " " + amPmNYC;

	clockAMS.innerHTML = hourAMS + ":" + minutes + " " + amPmAMS;

	clockLONDON.innerHTML = hourLONDON + ":" + minutes + " " + amPmLONDON;
	
}

function changeEarth(){

	document.getElementById("circle").style.background = "green";
}

function changeMoon(){

	document.getElementById("circle").style.background = "grey";
}

function changeSaturn(){

	document.getElementById("circle").style.background = "purple";
}

function changeJupiter(){

	document.getElementById("circle").style.background = "blue";
}

function changeMars(){

	document.getElementById("circle").style.background = "orange";
}

function flashSeperator(seconds) {
	// !! your code here

	if (seconds % 2 ==1)
	{
		return '<span class = "trans">:</span>';
	}
	else {
		return'<span>:</span>';
	};

}



initClock();
