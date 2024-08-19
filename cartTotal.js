import { getCartProductFromLS } from "./cartfromlocal";
import { updateCardValue } from "./updateCardValue";

export const   CartTotal = ()=>{
    let Cartproducts = getCartProductFromLS();

    let subTotal = document.querySelector(".subprice")
    let total = document.querySelector(".totalPrice")

    let initialValue = 0;

    // for sum all of element use reduce method.
    let totalProductPrice = Cartproducts.reduce((accum, curElem)=>{

        let productPrice = parseInt(curElem.price)

        return accum + productPrice;

    }, initialValue)

    // console.log(totalProductPrice);
 
    subTotal.textContent = `৳${totalProductPrice}`;
    total.textContent = `৳${totalProductPrice + 50}`;


    updateCardValue(Cartproducts);
}

