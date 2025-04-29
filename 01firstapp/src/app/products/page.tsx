import Link from "next/link"

const Products = () => {
    const randomNumber = Math.round(Math.random() * 100)
    return (
        <div>
            <Link href="/" className="text-blue-500"> Home </ Link>
            <h1>Product Listing Page</h1>
            <h2>Product 1</h2>
            <Link href={`/products/${randomNumber}`}>Product number {randomNumber}</Link>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
    )
}

export default Products