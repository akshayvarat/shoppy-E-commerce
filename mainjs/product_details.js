let userdata=JSON.parse(localStorage.getItem("useris"));
	let loginis=`cart${userdata}`;
	if (userdata==null || userdata=="") {
		window.location='./user-login.html';
		alert("you need login!!!1");
	}
	else {
	   
	
	function productdetail() {
		
		let lpdata=JSON.parse(localStorage.getItem("addproduct"));
		
		let str=``;
		
		let userdt=JSON.parse(localStorage.getItem(`user`));
		for (i = userdt; i < lpdata.length; i++) {
			
			str=`
				<div class="row">
					<div class="col col-sm-4">
						<div class="card">
							<img  class="product_img" src="${lpdata[i].imgurl}" height="218px" width="317px">
						</div>
					</div>
						<div class="col col-sm-6 ">
							<div class="card details" >
								<div class="title">
									<span class="brand" >${lpdata[i].brand} </span> 
									<span class="model">Spectre x360</span>
									<span class="generation">${lpdata[i].processor}</span>
									<span class="storage">${lpdata[i].ramrom}</span>
									<span class="color">Silver/ Black</span>
									
								</div>
									
									<div><span class="price">&#8377;${lpdata[i].price}</span></div>
								<div class="offers">  
									<div> 
										Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
									</div>
									<div>
										Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition applyT&C
									</div>  
									<div>Bank Offer5% off upto ₹25 on any prepaid instrumentT&C</div>
									<div>
										Get Google Nest mini at just ₹2499 on purchase of select Smartphones, TVs, Laptops, TV streamingT&C
									</div>
								</div>     				
							</div>
						</div>
					</div>
					<div class="row mb-4 ">
						<div class="col sm-12 mt-4 ">
							<a href="#" class="btn btn-outline-primary " onclick="addcart(${i})">Add To Cart</a>
							
						</div>
					</div>
				</div>`;

				break;
	
		}
		document.getElementById("pdetail").innerHTML=str;
	}
	productdetail();

	function addcart(id) {
		let arr=[];
		let cdata=JSON.parse(localStorage.getItem(`${loginis}`));
		// console.log(cdata);
		let ide=id;
		// console.log("ide"+ide);
		arr.push(ide);
		localStorage.setItem(`${loginis}`, JSON.stringify(arr));
		if (cdata!=null) {
		
			for (let i = 0; i <=ide; i++) {
				if (ide!==cdata[i]) {
					if (cdata!==null) {
						let indexdata=cdata.concat(arr);
						console.log(indexdata);
						localStorage.setItem(`${loginis}`, JSON.stringify(indexdata));
					} else {
						localStorage.setItem(`${loginis}`, JSON.stringify(arr));
					}
				window.location='./shopping-cart.html';
				} else {
					alert('product is already selescted.!!!');
					window.location='./shopping-cart.html';
				}
				break;
			}
			
		}
		window.location='./shopping-cart.html';
	}
	}