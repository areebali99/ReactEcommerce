import React,{useContext} from 'react';
import {ProductsContext} from '../Global/ProductsContext';
import {CartContext} from '../Global/CartContext';
import Banner from './Banner';



const Products = () =>{
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    
    
    return(
        <div className="products">
            <Banner/>
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image}/>
                </div>
                <div className="product-details">
                <div className="product-name">
                        {product.name}
                </div>
                <div className="product-price">
                        ${product.price}.00
                </div>
                </div>
                <div className="add-to-cart" onClick={() => dispatch({type:'ADD_TO_CART', id: product.id, product})}>add to cart</div>

                </div>
            ))}
        </div>
    )
}

export default Products;