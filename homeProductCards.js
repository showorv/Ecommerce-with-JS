import { addToCart } from "./addtocart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer= document.querySelector("#productsContainer")
const templateContainer= document.querySelector("#productsTemplate")




export const showProductContainer = (products)=>{

    if(!products){
        return false;
    }
    

    products.forEach((curProd)=>{

        const {id,name,catagory,brand,price,stock,description,image,link}=curProd; //destucturing


        const productClone = document.importNode(templateContainer.content,true)

        //setattribute for each card

        productClone.querySelector("#cardvalue").setAttribute("id",`card${id}`);

        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".stockAmount").textContent=stock;
        productClone.querySelector(".catagoryname").textContent=catagory;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".offerPrice").textContent=`৳${price}`;
        productClone.querySelector(".realPrice").textContent=`৳${price*4}`;
        // productClone.querySelector(".linkpage").href=link;


        productClone.querySelector(".quantitySelection").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock);
        });

        productClone.querySelector(".addTocart").addEventListener("click",(event)=>{

            addToCart(event,id,stock);
        })
        productContainer.append(productClone)
    })

}