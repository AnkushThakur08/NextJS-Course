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
