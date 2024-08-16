import { updateCardValue } from "./updateCardValue";


export const getCartProductFromLS=()=>{

    let cardProducts= localStorage.getItem("cartLocalProduct")

    if(!cardProducts){
        return [];
    }

    cardProducts=JSON.parse(cardProducts); //localstorage e products string akare thake tai json e convert

    //refresh dileo jate cart e item er number chole na jay tai cartlocal eo add korte hbe updatedcardValue function..
    updateCardValue(cardProducts);

    return cardProducts;

    
};