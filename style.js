const allBtn = document.getElementsByClassName("add-btn");

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click",function(e){
        count = count + 1;

       

        setInnerText("cart-count",count);
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}











// function getConvertedValue(id){
//   const price = document.getElementById(id).innerText;
//   const conVertPrice = perseInt(price);
//   return conVertPrice;
// }
function getConvertedValue(id){
  const price = document.getElementById("price").innerText;
  const conVertPrice = perseInt(price);
  console.log(conVertPrice);
}

getConvertedValue()