let time=document.getElementById('time');
let color=document.getElementById('color');
let body=document.body;
function initTime(){

	let d= new Date();

	let hour=d.getHours();
	let minute=d.getMinutes();
	let second=d.getSeconds();
	let ampm=(hour>=12)?'PM':'AM';
	hour=hour%12;
	if(minute<10){
		minute=`0${minute}`;
	}
	if(hour.length<2){
		hour=`0${hour}`;
	}
	if(second<10){
		second=`0${second}`;
	}

	let hexColor=`#${hour}${minute}${second}`;
	let timeStr=`${hour}:${minute}:${second} ${ampm}`;
	time.innerHTML=timeStr;
	color.innerHTML=hexColor;
	body.style.backgroundColor=hexColor;
	setTimeout(initTime,1000);
}

initTime();