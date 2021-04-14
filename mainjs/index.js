function product() {

    let lpdata=JSON.parse(localStorage.getItem("addproduct"));
    let str=``;
    for (let i = 0; i < lpdata.length; i++) {
        str+=`<div class="col-md-3" onclick="gotodetail(${i})">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="${lpdata[i].imgurl}"> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Some item name here</a>
                        <div class="price mt-1">${lpdata[i].price}</div> 
                    </figcaption>
                </div>
            </div> `;
    }
    document.getElementById("product").innerHTML=str;
}
product();
function gotodetail(id) {
    if (id!=null) {
        let user=`${id}`;
        localStorage.setItem(`user`,JSON.stringify(user));
        window.location='./product_details.html';
    } else {
        alert('product is not selected yet..!!!');
    }
}
