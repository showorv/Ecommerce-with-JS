

const cartValue=document.querySelector("#cartValue");
const cartPrice=document.querySelector("#cartPrice");

export const updateCardValue=(cartValues)=>{
    

        return (cartValue.innerHTML=`<a href="" id="cartValue"><h5><span>${cartValues.length} <span>item</h5></a>`);

        // (cartPrice.innerHTML=`<a href="" id="cartPrice"><h2>Total <span>${cartValues.price}$</span></h2></a>`);


};