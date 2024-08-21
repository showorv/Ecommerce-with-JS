import products from "./api/products.json";
import { CartTotal } from "./cartTotal";
import { getCartProductFromLS } from "./cartfromlocal";
import { incrementDecrement } from "./incrementDecrement";
import { matchQuantityPriceLS } from "./matchQuantityPriceLS";
import { removeCart } from "./removeCart";

// localstorage theke ber korte hbe kongula addtocart kora ase + bakidetails er jnne products.json theke details information nite hbe
let Cartproducts = getCartProductFromLS();

let filterProdcuts = products.filter((curProd)=>{

    return Cartproducts.some((curlem) => curlem.id=== curProd.id);
});

console.log(filterProdcuts);

const productCart= document.querySelector(".showCartes")
const productTemplate = document.querySelector("#cartTemplate")


 //create function for all details

  const showCartProduct = ()=>{


    filterProdcuts.forEach((curProd)=>{

        const {id,name,catagory,brand,price,stock,description,image} = curProd;

        let productClone = document.importNode(productTemplate.content , true)

// cart list gele jate exact price ashe sheijnne. nahole cart list e gele 1 ta quantity ba setar price shudhu show korbe
        let matchproduct = matchQuantityPriceLS(id,price);

        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`)
        productClone.querySelector(".catagory").textContent = catagory;
        productClone.querySelector(".productNames").textContent=name;
        productClone.querySelector(".ImageBox").src=image;
        productClone.querySelector(".ImageBox").alt=name;
        
        productClone.querySelector(".quantityValues").textContent = matchproduct.quantity;
        productClone.querySelector(".productPrice").textContent = matchproduct.price;


        //increment decrement in cart again

        productClone.querySelector(".quantityBox").addEventListener("click",(event)=>{
          incrementDecrement(event,id,stock,price);
      });

//for removing cart
        productClone.querySelector(".removeCart").addEventListener("click",()=>removeCart(id));



        productCart.append(productClone)

    })



  }

  showCartProduct()

  CartTotal()

