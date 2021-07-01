function changeColor(){
	var color = document.getElementById("ul_4");
	color.style.background = 'rgba('+ran()+','+ran()+','+ran()+','+'0.2)';
}
function ran(){
	return Math.floor(Math.random()*10000000)%256;
}
setInterval(changeColor,1000);