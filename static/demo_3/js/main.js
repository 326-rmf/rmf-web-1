function pics1(){
	var myimg=document.getElementById("im3");
	if(myimg.src.match("zsm1.jpg")){
		myimg.src="img/zsm2.jpg";
		
	}
	else if(myimg.src.match("zsm2.jpg")){
		myimg.src="img/zsm3.jpg";
	}
	else if(myimg.src.match("zsm3.jpg")){
		myimg.src="img/zsm4.jpg";
	}
	else {
		myimg.src="img/zsm1.jpg";
	}
}
function exctPic1(){
	var t=setInterval(pics1,2000);
	var lis=document.getElementById("btn").getElementsByTagName("li");
	var myimg=document.getElementById("im3");
	for(var i=0;i<lis.length;i++)
	{
		lis[i].onmousemove=function(){
			clearInterval(t);//清除定时器
			for(var i=0;i<lis.length;i++){
				if(lis[i]==this){
					myimg.src="img/zsm"+(i+1)+".jpg";
				}
			}
		}
		lis[i].onmouseout=function(){
			t=setInterval(pics1,2000);//鼠标移出,启动定时器,自动恢复切换功能
		}
	}
	
}
window.onload=function(){exctPic1();}