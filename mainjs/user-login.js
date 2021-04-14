function login(e) {
    e.preventDefault();
    let username=document.getElementById("uname").value;
    let passw=document.getElementById("pass").value;
    let matchdata=JSON.parse(localStorage.getItem("register"));
    if (username!=null && passw!=null) {
    
    for (let i = 0; i <matchdata.length; i++) {

            
            if (username=="admin" && passw=="123") {
                window.location='./admin/index.html';
                // alert("admin is here");
            }else 
            if(username == matchdata[i].fname && passw == matchdata[i].pass) {
                alert("user lohin success");
                window.location='./index.html';
                let ulname=matchdata[i].fname;
                localStorage.setItem("useris",JSON.stringify(ulname));
                
            }
            
    }

} else {
    alert("Invalid detail please fill valid data..!!!");		
}

    
}