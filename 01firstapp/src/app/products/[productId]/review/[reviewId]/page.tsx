import { IReviewProps } from "./type";

const ReviewId = async ({params}: IReviewProps) => {
    console.log("params", await params);

    const {productId, reviewId } = await params

    return (
        <div>
            <h1>This is my Product Id: {productId}</h1>
            <h1>This is my Review Id: {reviewId}</h1>
        </div>
    )
}

export default ReviewId