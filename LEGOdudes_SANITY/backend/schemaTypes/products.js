const products = {
    name: "product",
    title: "Produkter",
    type: "document",
    fields: [
        {
            name: "productname",
            title: "Produktnavn",
            type: "string"
        },
        {
            name: "price",
            title: "Pris",
            type: "number"
        },
        {
            name: "quantity",
            title: "Antall på lager",
            type: "number"
        },
        {
            name: "productimage",
            title: "Produktbilde",
            type: "image"
        },
        {
            name: "productcategory",
            title: "Kategori",
            type: "reference",
            to: [{type: "category"}]
        }
    ]
}

export default products