# Test Case FrontEnd

![Next.js Build](/packages/public/next_built.png)

## Challenges

1. Create a static page that displays a list of articles. Use Static Generation
   to retrieve data articles from an external API

**(https://jsonplaceholder.typicode.com/posts).**

- Answer: folder `apps/web/src/app/(static)/articles/page.tsx`, visit:
  `http://localhost:3001/articles`, data is static and generated at build time
  **(SSG)**

2. Create a dynamic page that displays a list of users. Use Server-Side
   Rendering to retrieve data users from an external API

**(https://jsonplaceholder.typicode.com/users).**

- Answer: folder `apps/web/src/app/(dynamic)/users/page.tsx`, visit:
  `http://localhost:3001/users/[id]`, data is dynamic and generated at request
  time (on demand)

3. Create an API endpoint that retrieves data products from a local JSON file.

- Answer: folder `apps/web/src/app/api/products/route.ts`, visit:
  `http://localhost:3001/api/products`

4. Create a form that submits data.

- Answer: folder `apps/web/src/app/(form)/form/page.tsx`, visit:
  `http://localhost:3001/form`, the data is temporarily stored in the local
  storage

5. Create an image optimization page that displays a list of images.

- Answer: folder `apps/web/src/app/(image)/image/page.tsx`, visit:
  `http://localhost:3001/image`
