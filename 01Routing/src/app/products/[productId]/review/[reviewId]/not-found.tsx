"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h1>
        There is No Product of this particular ID: {productId} and no Reviews
        for this {reviewId}
      </h1>
    </div>
  );
};

export default NotFound;
