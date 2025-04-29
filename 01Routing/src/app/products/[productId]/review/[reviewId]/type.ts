
export interface IReview {
    productId: string
    reviewId: string
}
export interface IReviewProps {
    params: Promise<IReview>
}