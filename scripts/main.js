
function initClock(){

	//init 

	startClock();

	//run every second

	setInterval(startClock, 1000);
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
if (hourLA > 11){
	amPmLA = "PM";
}
else {

	amPmLA = "AM";
}

if (hourNYC > 11){
	amPmNYC = "PM";
}
else {

	amPmNYC = "AM";
}

if (hourAMS > 11){
	amPmAMS = "PM";
}
else {

	amPmAMS = "AM";
}

if (hourLONDON > 11){
	amPmLONDON = "PM";
}
else {

	amPmLONDON = "AM";
}

if (hours > 11){
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

	clock.innerHTML = hours + ":" + minutes + " " + amPm;

	clockLA.innerHTML = hourLA + ":" + minutes + " " + amPmLA;

	clockNYC.innerHTML = hourNYC + ":" + minutes + " " + amPmNYC;

	clockAMS.innerHTML = hourAMS + ":" + minutes + " " + amPmAMS;

	clockLONDON.innerHTML = hourLONDON + ":" + minutes + " " + amPmLONDON;
	
}

function changeEarth(){

	document.querySelector("semiCircle").style.background = "green";

}

initClock();