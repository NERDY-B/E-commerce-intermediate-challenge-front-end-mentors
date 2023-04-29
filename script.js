`use strict mode`

const decrease = document.querySelector('.minus');
const increase = document.querySelector('.plus');
const orderQty = document.querySelector('.qty-val');
const showCart = document.querySelector('.show-carted-goods');
let html, btnHTML;
const addGood = document.querySelector('.add-to-cart');
let cartBool;
const cartContainer = document.querySelector('.cart-display');

const increment = function(){
    addGood.addEventListener('click', function(e){
        cartBool = true;
        // showCart.innerHTML = ''; 
        // showCart.querySelector(p).style.display= 'hidden';
        if(cartBool === true && Number(orderQty.textContent) > 0){
            
            html +=`
            <li>
                <div class="thumbnail">
    
                </div>
                 <div>
                    <p>Fall Limited Edition Sneakers</p>
                     <p>$125 x ${Number(orderQty.textContent)} <span>$${Number(orderQty.textContent) * 125}</span></p>
                 </div>
    
                 <i>del</i>
            </li>`
    
            btnHTML = `<label>Checkout</label>`;
            cartContainer.insertAdjacentHTML('beforeend',btnHTML);
    
            // showCart.querySelector('p').classList.add('hide');

            showCart.innerHTML = html ;
            // showCart.innerHTML(html, 'beforebegin');
            // showCart.innerHTML(btnHTML, 'afterend');
        }
    });
}

const toggleQuantity = (value) => {
    decrease.addEventListener('click',function(e){
        if(Number(value.textContent) === 0) {
            decrease.style.setProperty('color','rgb(228, 221, 221)');
            value.textContent = '0';
            console.log(value.textContent)
        }  
        else{
            ;
            Number(--value.textContent);
        }

    });
    increase.addEventListener('click', function(e){
    Number(++value.textContent);
    decrease.style.removeProperty('color')
    })
}
toggleQuantity(orderQty);
increment();
console.log('increment function should start here');