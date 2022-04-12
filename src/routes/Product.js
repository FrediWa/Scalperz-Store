/*
This is the component on the products route as opposed to the route for a single product 
*/

import './styles/Products.css'
import { Link } from 'react-router-dom'
import { generateStarRating } from '../Utils/Common';
import CartButton from './Components/CartButton';
import { useState } from 'react';
const axios = require('axios');


const Product = ({name, price, desc, rating, imageUrl, id}) => {
    const [stock, setStock] = useState(0)
    const token = sessionStorage.getItem("accessToken");

    // Check for stock
    axios.get(("https://cna-inventory-service.herokuapp.com/products/" + id), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => {setStock(data.data.antal)})
    
    // Product is in stock if there is more than 0 of said product
    const inStock = (stock > 0) 
    
    // Cut the description to 200 chars so that the site isn't cluttered with text
    const description = desc.substr(0, 200)
    
    return(
    <div className="product">
        <div className="product--image_wrapper">
            <Link to={"/product/"+id}>
                    <img src={imageUrl} />
            </Link>
            
        </div>
        <div className="product--info">
            <h1><Link to={"/product/"+id}>{name}</Link></h1>
            <p>{price}€</p>
            <p>{description}...<Link to={"/product/"+id}>read more</Link> </p>
            <p>{generateStarRating(rating)}</p>
            <CartButton id={id} active={inStock}/>
        </div>

    </div>
    )

}

export default Product