//var is used to declare a variable
var j=0;
var m1={
	name:"Welcome Program",
	imgfile:"a2.jpg"
};
var m2={
	name:"Tshirt Inauguration Program",
	imgfile:"a3.jpg"
};
var m3={
	name:"D'Village Program",
	imgfile:"a1.jpg"
};
var m4={
	name:"Winner Of the Changa Chait",
	imgfile:"a4.jpg"
};
var m5={
	name:"Youth Group",
	imgfile:"a5.jpg"
};
var file=[m1,m2,m3,m4,m5];
setInterval(Start,2000);
//function is used for JavaScript and loops
function Start(){
		document.getElementById("aboutslider").src="images/about/" +file[j].imgfile;
		document.getElementById("abouttext").innerHTML=file[j].name;
	j++;
	if(j>4)
	{
		j=0;
	}
}