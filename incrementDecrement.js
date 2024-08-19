import { CartTotal } from "./cartTotal";
import { getCartProductFromLS } from "./cartfromlocal";


export const incrementDecrement = (event,id,stock,price)=>{


    const currentCard = document.querySelector(`#card${id}`);

    const productQuantity = currentCard.querySelector(".quantityValues");
    const productPrice = currentCard.querySelector(".productPrice");
    

    let quantity = 1;
    let localPrice = 0;


    let Cartproducts = getCartProductFromLS();

    let existingProd = Cartproducts.find((curprod)=> curprod.id === id)
    

    if(existingProd){

        quantity = existingProd.quantity;
        localPrice = existingProd.price
    }

    else{
        localPrice = price;
        price = price; // main price jeta price seta
    }


    if(event.target.className === "increment"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity = stock;

            localPrice = price * stock;
        }
    }

    if(event.target.className === "decrement"){
        if(quantity > 1){
            quantity -=1;
        }
       
    }

   
    localPrice = price * quantity;


    let updatedCard={id , quantity, price:localPrice}

        updatedCard= Cartproducts.map((currentProd)=>{
           
            return currentProd.id===id ? updatedCard : currentProd;
        });

        // console.log(updatedCard);

        localStorage.setItem("cartLocalProduct",JSON.stringify(updatedCard))


        productQuantity.innerText=quantity;
        productPrice.innerText=localPrice;


        //for updating in subtotal div
        CartTotal()
}