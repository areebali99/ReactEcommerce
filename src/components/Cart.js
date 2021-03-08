import React,{useContext} from 'react';
import {CartContext} from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
    
     const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext);
     console.log("true")
    return(
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:'100px'}}>
                <h2>Shopping Cart</h2>
                { shoppingCart.length > 0 ? 
                 shoppingCart.map(cart => ( 
                     <div className="cart" key={cart.id}>
                         <span className="cart-image"><img src={cart.image}/></span>
                         <span className="cart-product-name">{cart.name}</span>
                         <span className="cart-product-price">${cart.price}.00</span>
                         <span className="inc" onClick={() => dispatch({type: 'INC',id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                         <span className="product-quantity">{cart.qty}</span>
                         <span className="dec" onClick={() => dispatch({type: 'DEC',id: cart.id, cart})}><i className="fas fa-minus"></i></span>
                         <span className="product-total-price">${cart.price * cart.qty}.00</span>
                         <span className="delete-product" onClick={() => dispatch({type: 'DELETE',id: cart.id, cart})}><i className="fas fa-trash-alt"></i></span>
                     </div>
                 ))
                : 'Sorry your cart is currently empty' }
           </div>
           {shoppingCart.length > 0 ? <div className="cart-summary">
               <div className="summary">
                   <h3>Summary</h3>
                   <div className="total-items">
                       <div className="items">Total Items</div>
                       <div className="items-count">{qty}</div>
                   </div>
                   <div className="total-price-section">
                       <div className="just-title">Total Price</div>
                       <div className="items-price">${totalPrice}.00</div>
                       <div className="stripe-section">
                       <StripeCheckout>
                           
                       </StripeCheckout>
                       </div>
               </div>
           </div>   
          
        </div>
         :  ''}
         </div>
        
    )
}
export default Cart;