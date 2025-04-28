# 📚 Next.js Course Notes

## ✨ Introduction

This repository contains notes, examples, and code snippets from the Next.js Course by Codevolution.
It covers key Next.js concepts including routing, dynamic routes, params handling, layouts, fetching data, and more.

## Routing in Next.js

- **Folder Name = Route Name**

  - Each folder inside the `app/` directory automatically creates a route.
  - The file must be named `page.tsx` to render a page.

- **Dynamic Routes**
  - Use square brackets `[ ]` for dynamic segments (e.g., `/products/105455256)`.
  - **Folder Structure**

```css
        app/
        └── products/
             └── [productId]/
                    └── page.tsx
```

- **Nested Dynamic Routes**
  - Example URL: `/products/105455256/reviews/65656565`
  - **Folder Structure**

```css
        app/
        └── products/
             └── [productId]/
                    └── reviews/
                        └── [reviewId]/
                                └── page.tsx
```

- **Catch-All Routes**
  - Use `[...slug]` to match multiple nested segments.
  - here we have created the slug of `docs/` route
  - So any route start with docs, will catch here
  - **Imp** it will not work for the docs page
  - To make it workable, we need to double wrap the slug [[...slug]]
    - **Folder Structure**

```css
   app/
    └── docs/
        └── [...slug]/
                └── page.tsx
```

- **Not Found**

  - we can create a file named as `not-found.tsx` inside the app folder
  - Name convensation should be same as it is
  - we also have a `notFound` Function from next, we can use that function to call our page based on the code Logic eg:
    `{parseInt(productId) > 1000 && notFound()}`
  - we can have mutiple 404 as well, to achieve that, we create a file `not-found.tsx` in that particular directory
  - we cannot access Props in Not Found to access the parameter we need to use `usePathName` hook

- **Private Folder**

  - User can create a Private folder by start the folder name with `_` underscore
  - folder starting with `_` are not included in the Routing

- **Route Grouping**
  - we can group the route using `( )` bracket
  - This help in making good Project Structure

```css
   app/
    └── (auth)/
            └── Login
            └── Register
            └── Forget
```
