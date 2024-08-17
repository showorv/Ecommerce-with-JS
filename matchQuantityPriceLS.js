import { getCartProductFromLS } from "./cartfromlocal";

export const matchQuantityPriceLS = (id,price)=>{

    let Cartproducts = getCartProductFromLS();

    let existingproduct = Cartproducts.find((curprod)=> curprod.id===id);

    let quantity = 1; //default er jnne dhore nibo

    if(existingproduct){

        quantity = existingproduct.quantity;
        price = existingproduct.price
    }

     return { quantity , price};
}