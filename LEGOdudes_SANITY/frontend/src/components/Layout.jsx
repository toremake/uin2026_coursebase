import Header from "./Header";
import Nav from "./Nav";
import Cart from "./Cart";

export default function Layout({setIsOpen, cartQuantity, isOpen, cart, setCart, totalSum, children}){
    return (
        <div id="container">
            <Header setIsOpen={setIsOpen} cartQuantity={cartQuantity} />
            <Nav />
            {children}
            <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum} />
        </div>
    )
}