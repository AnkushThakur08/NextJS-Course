# NextJS-Course

## Routing

- Folder name represent the route.
    - we need to create the file inside the folder with the name of **page**
- For ID's ```product/105455256 ```
    - we will use sqaure bracket []
    - **Folder Structure** - products > [productId] > page.tsx
- For Nested ID's ```product/105455256/reviews/65656565 ```
    - we will use sqaure bracket []
    - **Folder Structure** - products > [productId] > reviews > [reviewId] > page.tsx

## How to get the Params
- NextJS allow user to get the Params from the props
```javascript
const ReviewId = async ({params}: IReviewProps) => {
    const {productId, reviewId } = await params
    return (
        <div>
            <h1>This is my Product Id: {productId}</h1>
            <h1>This is my Review Id: {reviewId}</h1>
        </div>
    )
}

export default ReviewId

```

