
    function imageinset(img) {
        document.getElementById("imgurl").value=img;
      }
  
  
      function addproduct(){
          let arr=[];
        
                let brand       =document.getElementById("brand").value;
                let processor   =document.getElementById("processor").value;
                let ramrom      =document.getElementById("ramrom").value;
                let price       =+document.getElementById("price").value;
                let imgurl      =document.getElementById("imgurl").value;
  
          let obj={
  
            'brand':brand,
            'processor':processor,
            'ramrom':ramrom,
            'price':price,
            'imgurl':imgurl
          }
  
          arr.push(obj);
          let productdata=JSON.parse(localStorage.getItem("addproduct"));
  
          if (productdata!=null) {
            ldata=arr.concat(productdata);
            localStorage.setItem("addproduct",JSON.stringify(ldata));
            alert("product is added....");
          } else {
            localStorage.setItem("addproduct",JSON.stringify(arr));
            alert("product is added....");
          }
        
      }
  
  