function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";
	
	var errors="";
	if(document.getElementById("fname").value.length<3)
	{
		errors +="First name must have 3 Character.<br>";
	}
	if(document.getElementById("lname").value.length<5)
	{
		errors +="Last Name must have 5 character <br>";
	}
	if(document.getElementById("phone").value.length<10)
	{
		errors +="Phone Number must contain 10 digit.<br>";
	}
	if(document.getElementById("address").value.length<5)
	{
		errors +="Address must be 5 character.<br>";
	}
	if(document.getElementById("email").value.length<10)
	{
		errors +="Enter a Valid Email Address.<br>";
	}
	if(document.getElementById("edu-level").value=="")
	{
		errors +="Please Select your level.<br>";
	}
	if(errors!="")
	{
		document.getElementById("errorMessage").innerHTML=errors;
	}
	else{
		//document.getElementById("successMessage").innerHTML="You have successfully signed up Man";
		window.alert("YOU HAVE SUCCESFULLY SIGNED UP!!THANK YOU!!");
		window.location.href="new.html";
		
	}
	return false; 
}
document.getElementById("form").onsubmit=checkFormEntry;