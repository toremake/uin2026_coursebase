import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import client from '../helpers/client'
export default function Products({products, setCart}){
    const [sanityProducts, setSanityProducts] = useState(null)

    useEffect(() => {
      async function fetchAllProducts() {
        const allProducts = await client.fetch("*[_type == 'product']{_id, productname, price, 'category': productcategory->categoryname, 'imageURL': productimage.asset->url}")
        setSanityProducts(allProducts)
      }

      fetchAllProducts()
    }, [])

    console.log(sanityProducts)

    return (
    <div id="product-list">
      {sanityProducts?.map(p => <ProductCard key={p._id} p={p} setCart={setCart} />)}
    </div>)
  }