function changeColor(){
	var color = document.getElementsByClassName("uli");
	color.style.background = 'rgba('+ran()+','+ran()+','+ran()+','+'0.8)';
}
function ran(){
	return Math.floor(Math.random()*10000000)%256;
}
setInterval(changeColor,1000);