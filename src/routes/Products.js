import { useState } from "react"
import Product from "./Product"
const axios = require('axios')

const Products = () => {
    const [products, setProducts] = useState([])
    
    if(products.length == 0){

        axios.get("https://cna22-products-service.herokuapp.com/products")
        .then((res) => {
            const data = res.data
            const items = data.items
            
            setProducts(items)
        })
    }
    
    const productEls = products.map(e => <Product key={e.pid} id={e.pid}name={e.name} desc={e.description} price={e.price} rating={e.rating} />)
    return(
        <section className="products">
            <h1>Hello World</h1>
        {productEls}
        </section>
    )
}

export default Products