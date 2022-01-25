var valid1= 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var err=document.getElementById("error").innerHTML;
//empty field validation
if(username==""){alert("User Name Should not be empty");} if(password==""){alert("Password should not be empty");}
//if name and password match
if ( username == "zetech" && password == "youth"){
window.location = "new.html";
alert("You have Logged into the Website");
return false;
}
//code for try upto 3 chance then disable username and password field
else{
valid1--;
document.getElementById("error").innerHTML="Incrorrect username and password."+" You have left "+valid1+" attempt.";
if(valid1== 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;}}}
