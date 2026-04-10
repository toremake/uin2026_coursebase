import ProductCard from './ProductCard'
export default function Products({products, setCart}){
    return (
    <div id="product-list">
      {products.map(p => <ProductCard key={p.prodid} p={p} setCart={setCart} />)}
    </div>)
  }