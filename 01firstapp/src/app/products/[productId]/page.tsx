import { ProductDetailsProps } from "./type"

const ProductDetails = ({params}: ProductDetailsProps) => {
    const productID = params.productId
    return (
        <div>
            <h1>This is Product Listing Page {productID}</h1>
        </div>
    )
}

export default ProductDetails