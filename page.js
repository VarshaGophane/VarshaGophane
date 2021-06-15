function displayData(){

	if(document.getElementById('name').value == ""){
		alert("Please Enter Name");
		console.log("Please Enter Name");
		return false;
	}
	else if (document.getElementById('email').value == "") {
		alert("Please Enter Email");
		console.log("Please Enter Email");
		return false;
	}

	else if (document.getElementById('number').value == "") {
		alert("Please Enter Phone number");
		console.log("Please Enter Phone number");
		return false;
	}

	else if (document.getElementById('msg').value == "") {
		alert("Please Enter Message");
		console.log("Please Enter Message");
		return false;

	}

	else{

		var Name = document.getElementById('name').value;
		var email_id = document.getElementById('email').value;
		var phone_No = document.getElementById('number').value;
		var message = document.getElementById('msg').value;

		
		if(checkPhone(phone_No) && checkMail(email_id))
		{
			console.log("Name is    : "+Name);
			console.log("Email is   : "+email_id);
			console.log("Phone No is: "+phone_No);
			console.log("Message is	: "+message);
		}
	}

	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	document.getElementById('number').value = "";
	document.getElementById('msg').value = "";
}

function checkPhone(phone_No) 
{
	if (phone_No.length < 10 || phone_No.length > 10)
	{
		alert("Please Enter a Valid Phone number");
		console.log("Please Enter a Valid Phone number");
		return false;
	}

	else
	{
		return true;
	}
}

function checkMail(email_id) 
{
	
	var expp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

	if(email_id.match(expp))
	{
		return true;
	}
	else
	{
		alert("Please Enter Valid Email");
		console.log("Please Enter Valid Email");
		return false;
	}
}