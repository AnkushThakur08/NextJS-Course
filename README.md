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
  - we can have mutiple **not found pages** as well, to achieve that, we create a file `not-found.tsx` in that particular directory
  - we cannot access Props in Not Found to access the parameter we need to use `usePathName` hook

    - **Folder Structure**

```css
   app/
    └── not-found.tsx
```

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

## Layout in NextJS

- **Root Layout**
  - NextJS provides a file `layout.tsx` file at the root level, which is known as Root layout
  - `layout.tsx` takes `{children}` as a props
  - Header and Footer will be shared by all the Pages, so we have added them in the layout
  - Things which will be shared by the entire app will be added here eg we have added `<Header />` `<Footer />`

```javascript
<Header />;
{
  Children;
}
<Footer />;
```

- **Nested Layout**

  - we can create different layout for different Pages
  - To create that we need to create a `Layout.tsx` in that particular folder

- **Mutiple Root Layout**

  - You can separate layouts for certain route groups using folder grouping:
  - Example: Don't want `Header/Footer` in login/signup pages.
  - Structure:

    ```plaintext
    app/
    └── (with-layout)/
        ├── layout.tsx  ← includes Header & Footer
        └── dashboard/
        └── about/
        └── contact/

    └── (auth)/
        ├── login/
        ├── register/
    ```

### MetaData

- Used for SEO Purpose
  - **Layout**
    - It is applicable to all the pages
  - **Particular Page**
    - It is applicable to that particular page

```javascript
export const metadata: Metadata = {
  title: "About Us",
  description: "This is the description of about us Page",
};
```

- **Dynamic MetaData**

- **Title with Object**

### Link

- It is used for Navigation
- `href` - The path or URL to navigate to
- `<Link className="text-blue-300" href="/products"> Products</Link>`
- **replace** - will replace the current history state instead of adding a new URL into the browser's history stack.
- We can also add the logic for **Active** Tab

### Params & Search Params

- We can get the value of Params and Search Params, using the props in the server side component
- on the Client side component we need to use hook, that is `use()` hook
- **Imp** `layout.tsx` has only access to `searchParams`, while `page.tsx` has access to Params and Search Params

```javascript
const { articleId } = use(params);
const { lang } = use(searchParams);
```

### Router

- It is used for navigation
- We have have `redirect`, instead of showing not found page, we can redirect the user to products page with the help of redirect

```javascript
const router = useRouter()

router.push(/)
router.forward()
router.replace()

```

### Template

- Template File re-renders
- layouts are not re-renders
- so in Jb humne pass grouping hoti hai `()` like in auth, we have a layout, so code code written in layout will not re-render
