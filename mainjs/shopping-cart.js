
	let userdata=JSON.parse(localStorage.getItem("useris"));
	let loginis=`cart${userdata}`;
	if (userdata==null || userdata=="") {
		window.location='./user-login.html';
		alert("you need login!!!1");
	}
	else {

	function cartproduct() {
		
		let lpdata=JSON.parse(localStorage.getItem("addproduct"));
		
		let cart=JSON.parse(localStorage.getItem(`${loginis}`));
		// console.log("sdfsdf:"+cart);
		
		
		if (cart!=null && lpdata!=null) {
			
			
			let str="";
			
			
			for (let i=0; i<cart.length; i++) {

				let id=cart[i];
				// console.log("i:"+value);
				for ( j =id; j <=id; j++) {
					// console.log("j:"+j);
					str+=`
					<tr>
						<td>
							<figure class="itemside">
								<div class="aside"><img src="${lpdata[j].imgurl}" class="img-sm"></div>
								<figcaption class="info">
									<a href="#" class="title text-dark">${lpdata[j].brand}</a>
									<p class="text-muted small">${lpdata[j].processor} <br> ${lpdata[j].price}</p>
									</figcaption>
							</figure>
							</td>
						<td> 
							<select class="form-control" id="${j}quant" onclick="quantityis(${j})">
								<option id="${j}-uit" selected>1</option>
								<option>1</option>
								<option>2</option>	
								<option>3</option>	
								<option>4</option>	
								</select> 
								</td>
								<td> 
									<div class="price-wrap"> 
								<var class="price" id="${j}price">${lpdata[j].price}</var> 
								 
								</div> 
						</td>
						<td class="text-right"> 
							<a data-original-title="Save to Wishlist" title="" href="#" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
							<a href="#" class="btn btn-light btn-round" onclick="removeitem(${i})"> Remove</a>
							</td>
							</tr>`;
							
							
							
						}

				
					}
					document.getElementById("productcart").innerHTML=str;

				} else {
					alert("ooops...!!! somthing wents wrong...")
		}
		quantityis();
		
		
	}
	cartproduct();

	function removeitem(idis){
		
	let acart=JSON.parse(localStorage.getItem(`${loginis}`));
	for (let i = idis; i <= idis; i++) {
		let a=acart[i];
		localStorage.removeItem(`${a}-qis${userdata}`);
		localStorage.removeItem(`${a}-val${userdata}`);
		localStorage.removeItem(`${userdata}ov:${a}`);
		price();
	}
	acart.splice(idis, 1);
	localStorage.setItem(`${loginis}`,JSON.stringify(acart));
	document.getElementById("productcart").innerHTML=acart; 
	cartproduct();
		
}
function quantityis(id) {
	
		if (id !=null) {
			
			let quant=+document.getElementById(`${id}quant`).value;
			console.log(typeof(quant));
			localStorage.setItem(`${id}-qis${userdata}`, quant);
			localStorage.setItem(`${id}-val${userdata}`, id);
			let lpdata=JSON.parse(localStorage.getItem("addproduct"));
			
			let qval=0;
			
			for ( i = id; i<= id; i++) {
				 qval=(lpdata[i].price) * (quant);
				localStorage.setItem(`${userdata}ov:${i}`,(qval));
				let val=localStorage.getItem(`${userdata}ov:${i}`);
				document.getElementById(`${i}price`).innerHTML=val;
				
				
			}	
			
		}
		
		price();
	
		
		
	}
	
	
	function price(){
		let lpdata=JSON.parse(localStorage.getItem("addproduct"));
		let acart=JSON.parse(localStorage.getItem(`${loginis}`));
	
		if (acart!=null && acart!="") {
			for (let  i = 0; i < lpdata.length; i++){
				let qtt=localStorage.getItem(`${i}-qis${userdata}`);
				let val=localStorage.getItem(`${i}-val${userdata}`);	
				if (qtt&&val!=null){			
					let tval=localStorage.getItem(`${userdata}ov:${i}`);
					document.getElementById(`${i}price`).innerHTML=tval;
					document.getElementById(`${i}-uit`).innerHTML=qtt;
				
				}
			}
		}
		dispalypay();
	}

	
function dispalypay(){

		let lpdata=JSON.parse(localStorage.getItem("addproduct"));
		let acart=JSON.parse(localStorage.getItem(`${loginis}`));	
		let totalval=0;
		let alclik=0;
		// let quanty=0;
		// let alaunt=0;
		for (let i = 0; i < acart.length; i++) {
			
			let oprice=acart[i];
			let val=localStorage.getItem(`${oprice}-val${userdata}`);
			// console.log("cart id "+oprice);
			console.log(val);
			
			if (oprice!=null) {
				
				if (oprice==val) {	
					let prs=localStorage.getItem(`${userdata}ov:${val}`);
					// let qtt=localStorage.getItem(`${oprice}-qis`);
					
					parseInt(prs);
					totalval=totalval+(+prs);
					// quanty=quanty+(+qtt);
					// console.log("nnn"+quanty);
					// console.log("@@@");
					// console.log("cllcked"+totalval);
				}
				else{
					// console.log(typeof(lpdata[oprice].price));
					// let quant=document.getElementById(`${i}-uit`).value=quanty;
					// console.log(quant);
					alclik=alclik+(parseInt(lpdata[oprice].price));
					// alaunt=alaunt+(+quant);
					console.log("###");
				}
			}
		}
		let allprice=totalval+alclik;
		
		document.getElementById("tprice").innerHTML=allprice;
	}
	
	dispalypay();
}