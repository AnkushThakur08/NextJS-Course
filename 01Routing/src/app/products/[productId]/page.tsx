import { ProductDetailsProps } from "./type"

const ProductDetails = async({params}: ProductDetailsProps) => {
    const {productId} = await params
    return (
        <div>
            <h1>This is Product Listing Page {productId}</h1>
        </div>
    )
}

export default ProductDetails