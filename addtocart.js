import { getCartProductFromLS } from "./cartfromlocal";
import { showToast } from "./showToast";
import { updateCardValue } from "./updateCardValue";


//refresh dileo jate cart e item er number chole na jay tai top e .
getCartProductFromLS();

export const addToCart=(event,id,stock)=>{

    const currentProd= document.querySelector(`#card${id}`);

    let quantity= currentProd.querySelector(".quantityValue").innerText;
    let price= currentProd.querySelector(".offerPrice").innerText;


    // console.log(price,quantity,currentProd);

    //add to cart e nwwar jnne. value local stoage e save rakhar jnne

    let arrLocalStorageProduct= getCartProductFromLS();

    price=price.replace("৳","");

    //if same id same quantity add korte chay tahole jate card e update nahoy

    const existingprod=arrLocalStorageProduct.find((currentProd)=> currentProd.id===id
       
    );

  

    //jdi existing product ager cheye quantity + kore add kore tkhn ager tar sthe jog korar jnne

    if(existingprod && quantity > 1){

        quantity=Number(existingprod.quantity) + Number(quantity); //number na dile concat hoye jabe.tai both needed string to number

        price=Number(price * quantity);

        let updatedCard={id,quantity,price}

        updatedCard= arrLocalStorageProduct.map((currentProd)=>{
            // if(currentProd.id===id){
            //     updatedCard;
            // }
            // else{
            //     currentProd;
            // }
            return currentProd.id===id ? updatedCard : currentProd;

           
        });

        console.log(updatedCard);

        localStorage.setItem("cartLocalProduct",JSON.stringify(updatedCard))

        showToast("add", id)
    }

    if(existingprod){
        // alert("already exist")
        return false;
    }
    price=price*quantity;

    quantity=Number(quantity);

    let updatedCart={id,quantity,price};
    arrLocalStorageProduct.push(updatedCart);

    localStorage.setItem("cartLocalProduct",JSON.stringify(arrLocalStorageProduct)) //inspect-> localstorage
    // console.log(updatedCart);

    showToast("add", id)

    updateCardValue(arrLocalStorageProduct);
    


};