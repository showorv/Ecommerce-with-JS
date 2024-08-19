
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';

export function showToast(operation, id){

const product = products.find((curElem)=>curElem.id === id)
const toast = document.createElement("div");

toast.classList.add("toast")

if(operation === "add"){

    toast.textContent = `${product.name} has been added`
}
else if(operation === "delete"){
    toast.textContent = `${product.name} has been deleted`
}

document.body.appendChild(toast)

setTimeout(() => {
    toast.classList.add("show")
}, 10);


setTimeout(() => {
    toast.remove()
 }, 2000);
 
}

showToast()

