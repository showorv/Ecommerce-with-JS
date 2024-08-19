import { CartTotal } from "./cartTotal";
import { getCartProductFromLS } from "./cartfromlocal";
import { showToast } from "./showToast";
import { updateCardValue } from "./updateCardValue";

export const removeCart = (id)=>{

    let Cartproducts = getCartProductFromLS();

    Cartproducts = Cartproducts.filter((curprod)=> curprod.id !== id)

    //update local storage after removing 
    localStorage.setItem("cartLocalProduct",JSON.stringify(Cartproducts))

    //remove cart in ui

    let removeDiv = document.querySelector(`#card${id}`)

    if(removeDiv){
        removeDiv.remove();

        showToast("delete", id)

    }

    updateCardValue(Cartproducts);
    CartTotal()
}