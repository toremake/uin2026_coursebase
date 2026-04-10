import { Link } from "react-router-dom"
export default function Header({setIsOpen, cartQuantity}){
    return(
      <header>
        <h1>
          <Link to="/">           
            <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
          </Link>
          </h1>
          <button id="cart-button" onClick={()=> setIsOpen((prev) => !prev)}>
            <div id="cart-quantity">{cartQuantity}</div>
            <img src="website_images/legocart.svg" alt="Handlevogn" />
          </button>
      </header>
    )
  }