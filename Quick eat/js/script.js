import { products } from "./products.js";

const openMenuEl = document.getElementById("bars");
const closemenuEl = document.getElementById("cancel");
const navbarEl = document.querySelector("nav");
const productsContainer = document.querySelector(".products");
let html = "";
const CartItems =[];

openMenuEl.addEventListener("click", () => {
  navbarEl.style.display = "flex";
  openMenuEl.style.display = "none";
  closemenuEl.style.display = "block";
});

closemenuEl.addEventListener("click", () => {
  navbarEl.style.display = "none";
  openMenuEl.style.display = "block";
  closemenuEl.style.display = "none";
});
function generateDynamicHtml() {
  products.forEach(({id, productImage , productName , productPrice }) => {
    
    html += ` 
        <div class="product">
            <img src=${productImage} alt="food-3" />
            <span>${productName}</span>
            <span>$${productPrice}</span>
             <button  data-product-id="${id}" class="order-btn">Order Now</button>
          </div>`;

          //data-name  of the data-set is used in the html to store key value pairs in html
//the data-set name is the key while the value we access is the value 

  });
  productsContainer.innerHTML = html;
}
generateDynamicHtml();

// to target  the 8 buttons
const buttons=document.querySelectorAll(".product button");
//console.log(buttons)

buttons.forEach(button=>{
 // console.log(button)
 button.addEventListener('click',()=>{

 })
})