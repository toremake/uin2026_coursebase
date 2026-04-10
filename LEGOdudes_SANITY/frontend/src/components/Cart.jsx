import CartItem from "./CartItem"
export default function Cart({isOpen, cart, setCart, totalSum}){
    return (
      <>
        {/*
          Hele handlekurv-seksjonen.
          Vises eller skjules basert på verdien av isOpen.
        */}
        <section id="cart" className={isOpen ? "" : "hidden"}>

          {/*
            Tabell som inneholder innholdet i handlekurven
          */}
          <table id="cart-items">
            <tbody>

              {/*
                Betinget rendering (ternary-operator):

                SJEKK:
                cart.length <= 0
                → Er handlekurven tom?
              */}
              {cart.length <= 0 ? (

                /*
                  Hvis handlekurven er tom:
                  - Vis en melding til brukeren
                */
                <tr>
                  <td>Ingen varer i handlevognen enda.</td>
                </tr>

              ) : (

                /*
                  Hvis handlekurven IKKE er tom:
                  - Gå gjennom alle produkter i cart
                  - Render én CartItem-komponent per produkt
                */
                cart.map(p => (

                  /*
                    CartItem får produktet p som prop.
                    key er nødvendig for React når man renderer lister.
                  */
                  <CartItem
                    key={p.prodid}
                    p={p}
                    setCart={setCart}
                  />
                ))
              )}

            </tbody>
          </table>

          {/*
            Viser total pris for handlekurven.
            Verdien bør egentlig beregnes dynamisk fra cart.
          */}
          <p>
            Total pris: <span id="total-price">{totalSum}</span> NOK
          </p>

        </section>
      </>
    )
  }