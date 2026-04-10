export default function CartItem({p, setCart}){
    /*
      removeFromCart kjøres når brukeren vil fjerne ett eksemplar
      av et produkt fra handlekurven.
      prodid forteller hvilket produkt som skal reduseres.
    */
    const removeFromCart = (prodid) => {

      /*
        setCart oppdaterer handlekurv-state.
        prev er den forrige (nåværende) handlekurven.
      */
      setCart(prev =>

        /*
          Først bruker vi map():
          - Vi går gjennom alle produkter i handlekurven
          - Vi finner produktet med riktig prodid
          - Quantity reduseres med 1 for akkurat dette produktet
        */
        prev.map(item =>
          item.prodid === prodid
            /*
              Hvis dette er produktet som skal fjernes:
              - kopier alle eksisterende egenskaper
              - reduser quantity med 1
            */
            ? { ...item, quantity: item.quantity - 1 }

            /*
              Hvis det er et annet produkt:
              - returner det uendret
            */
            : item
        )

        /*
          Etter map() bruker vi filter():
          - Fjerner alle produkter som har quantity 0 eller mindre
          - Dette gjør at produkter automatisk forsvinner
            fra handlekurven når antallet blir 0
        */
        .filter(item => item.quantity > 0)
      );
    };

    return (
      <tr>
        <td className="title">{p.title}</td>
        <td className="price">{p.price}</td>
        <td className="quantity">{p.quantity}</td>
        <td className="delete"><button onClick={()=>removeFromCart(p.prodid)}>X</button></td>
      </tr>
    )
  }  