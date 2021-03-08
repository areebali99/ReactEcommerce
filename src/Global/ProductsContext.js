import React , {createContext,useState} from 'react'

import dslr from '../images/dslr.jpg';
import headphones from '../images/headphones.jpg';
import iphone from '../images/iphone.jpg';
import shirt from '../images/shirt.jpg';
import led from '../images/led.jpg';
import mic from '../images/mic.jpg';
import watch from '../images/watch.jpg';
import coat from '../images/coat.jpg';


export const ProductsContext = createContext();


const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id:1 ,name:'Dslr',price:300,image:dslr,status:'hot'},
        {id:2 ,name:'Headphones',price:30,image:headphones,status:'new'},
        {id:3 ,name:'Iphone',price:500,image:iphone,status:'hot'},
        {id:4 ,name:'Shirt',price:100,image:shirt,status:'hot'},
        {id:5 ,name:'Led',price:800,image:led,status:'new'},
        {id:6 ,name:'Mic',price:400,image:mic,status:'hot'},
        {id:7 ,name:'Watch',price:150,image:watch,status:'hot'},
        {id:8 ,name:'Coat',price:250,image:coat,status:'hot'}
    ]);
    return(
        <div>
            <ProductsContext.Provider value={{products: [...products]}}>
                {props.children}
            </ProductsContext.Provider>

        </div>
    )
}

export default ProductsContextProvider;