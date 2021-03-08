import React,{useContext} from 'react';
import {CartContext} from '../Global/CartContext'
import {Link} from 'react-router-dom';

const Navbar = () =>{
    const {qty} = useContext(CartContext);
    return(
        <div>
            <nav>
                <ul className="left">
                    <li><Link to="/">Modamo</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="cart">
                    <span className="shoppingCart"><i className="fas fa-cart-plus"></i>
                    <span className="cartCount">{qty}</span>
                    </span>
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 

export default Navbar;