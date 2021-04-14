// fname
// lname
// email
// male
// female
// city
// country
// pass
// cpass
// save
// checkbox



function registeruser(e){

	e.preventDefault();


	let allarr=[];

	let fname=document.getElementById("fname").value;
	let lname=document.getElementById("lname").value;
	let email=document.getElementById("email").value;
	let male=document.getElementById("male").value;
	let female=document.getElementById("female").value;
	let city=document.getElementById("city").value;
	let country=document.getElementById("country").value;
	let pass=document.getElementById("pass").value;
	let cpass=document.getElementById("cpass").value;
	let checkbox=document.getElementById("checkbox").value;

	if (fname!="" && lname!="" && email!="" && city!=""&& country!="" && pass!="" && checkbox!="") {
		let alldata={
			"fname":fname,
			"lname":lname,
			"email":email,
			"male":male,
			"female":female,
			"city":city,
			"country":country,
			"pass":pass,
			"cpass":cpass,
			"checkbox":checkbox

		}

		console.log(alldata);

		allarr.push(alldata);

		let localdata=JSON.parse(localStorage.getItem("register"));
		
		if (localdata != null) {
			localdata = localdata.concat(allarr);
			localStorage.setItem("register",JSON.stringify(localdata));
			window.location='./user-login.html';
		} else {
			
			window.location='./user-login.html';
			localStorage.setItem("register",JSON.stringify(allarr));
						
		}
	} else {
			alert("Please fill all data fields !!!");
		}


}