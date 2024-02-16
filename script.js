function displayTime(){

	let hrs = document.getElementById("hrs");
	let mins = document.getElementById("mins");
	let secs = document.getElementById("secs");

	let dt = new Date();
	hrs.innerHTML = (dt.getHours())%12;
	mins.innerHTML = dt.getMinutes();
	secs.innerHTML = dt.getSeconds();
}

setInterval(displayTime,1000)
