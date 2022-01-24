//var is used to declare a variable
var j = 0;
var m1 = {
    name: "personal web portfolio",
    imgfile: "a2.jpg"
};
var m2 = {
    name: "college library",
    imgfile: "a3.jpg"
};
var m3 = {
    name: "destiny clothing website",
    imgfile: "a1.JPG"
};
var file = [m1, m2, m3, ];
setInterval(Start, 2000);
//function is used for JavaScript and loops
function Start() {
    document.getElementById("aboutslider").src = "images/about/" + file[j].imgfile;
    document.getElementById("abouttext").innerHTML = file[j].name;
    j++;
    if (j > 2) {
        j = 0;
    }
}