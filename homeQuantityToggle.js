export const homeQuantityToggle= (event,id,stock)=>{

    //for give unique id for each card
    const currentCard=document.querySelector(`#card${id}`);
    // console.log(currentCard);

    //current card e quantity set
    const productQuantity= currentCard.querySelector(".quantityValue");

    //parseint karon string ke int e rakhte r kisu na thkle default 1
    let quantity= parseInt(productQuantity.getAttribute("data-quantity"))||1;

    if(event.target.className==="cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity=== stock){
            quantity = stock;
        }
    }

    if(event.target.className==="cartSecrement"){
        if(quantity > 1){
            quantity -=1;
        }
       
    }

    productQuantity.innerText=quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;

};