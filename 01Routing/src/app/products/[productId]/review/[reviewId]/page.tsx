import { notFound } from "next/navigation";
import { IReviewProps } from "./type";

const ReviewId = async ({ params }: IReviewProps) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      {parseInt(productId) > 1000 && notFound()}
      <h1>This is my Product Id: {productId}</h1>
      <h1>This is my Review Id: {reviewId}</h1>
    </div>
  );
};

export default ReviewId;
