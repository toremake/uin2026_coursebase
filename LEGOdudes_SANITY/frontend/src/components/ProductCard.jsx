export default  function ProductCard({p, setCart}){
      /*
        handleClick kjøres når brukeren klikker på
        f.eks. "Legg i handlekurv"-knappen.
      */
      const handleClick = () => {

        /*
          setCart brukes for å oppdatere handlekurven (state).
          Vi sender inn en funksjon for å være sikre på
          at vi alltid jobber med nyeste versjon av cart (prev).
        */
        setCart((prev) =>

          /*
            prev.some(...) sjekker om produktet allerede
            finnes i handlekurven.
            - Returnerer true hvis et produkt har samme prodid
            - Returnerer false hvis produktet ikke finnes
          */
          prev.some(item => item.prodid === p.prodid)

            /*
              HVIS produktet allerede finnes:
              → vi må øke antallet (quantity) med 1
            */
            ? prev.map(item =>

                /*
                  Vi går gjennom alle produkter i handlekurven
                  og finner produktet med riktig prodid
                */
                item.prodid === p.prodid

                  /*
                    Når riktig produkt er funnet:
                    - kopier alle eksisterende egenskaper
                    - øk quantity med 1
                  */
                  ? { ...item, quantity: item.quantity + 1 }

                  /*
                    Hvis det er et annet produkt:
                    - returner det uendret
                  */
                  : item
              )

            /*
              HVIS produktet IKKE finnes i handlekurven:
              → legg det til som et nytt produkt
            */
            : [
                ...prev,            // behold alle eksisterende produkter
                {
                  ...p,             // kopier produktdata
                  quantity: 1       // start antall på 1
                }
              ]
        );

        /*
          Logger en melding i konsollen for debugging,
          slik at utvikleren ser at klikket ble registrert.
        */
        console.log("Legg i handlekurv");
      };
    return (
      <article className="product-card">
          <img src={`website_images/PROD_${p.imagefile}`} alt={p.title} />
          <a href="#">${p.category}</a>
          <h3>{p.title}</h3>
          <p>Kr. {p.price},-</p>
          <button onClick={handleClick}>Legg til handlevogn</button>
      </article>
    )
  }