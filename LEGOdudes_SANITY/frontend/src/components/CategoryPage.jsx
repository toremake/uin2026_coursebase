import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"
import ProductCard from "./ProductCard"

export default function CategoryPage() {
    const parameters = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        async function fetchCategory(slug) {
            const tempCategory = await client.fetch(`*[_type == 'category' && slug.current == $slug]{
                _id, categoryname, "catProds": *[_type == 'product' && references(^._id)]
            }`, {slug})
            setCategory(tempCategory[0])
        }

        fetchCategory(parameters.slug)
    }, [parameters])

    console.log(parameters)
    console.log("Category", category)


    return (
        <>
            <h1>{category?.categoryname}</h1>
            {category?.catProds.map((p, index) => <ProductCard key={index} p={p} />)}
        </>
    )
}