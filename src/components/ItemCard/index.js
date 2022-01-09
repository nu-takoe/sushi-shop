import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ItemCard() {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        fetch(`https://61817eda32c9e2001780483a.mockapi.io/items/${id}`)
            .then(res => res.json())
            .then(json => setItem(json))
    }, [id])

    return (
        <div>
            {item && (
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    )
}