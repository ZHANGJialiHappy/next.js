This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Create Next.js App
```bash
npx create-next-app .
# or
yarn create-next-app .
```
## Create pages
create pages under folder "pages"

## Create a page with [username]
```shell
import {useRouter} from "next/router";
```
insert the following code in function.
```shell
  const router = useRouter();
  const {usename} = router.query
```

## Create Navbar
```shell
import Link from "next/link";
```
insert the following code in Return
```shell
  <Link href="/"> Home </Link>
```

## Create Layout
```shell
import Navbar from "./Navbar";

 const Layout = ({children}) => {
    return (
        <>
        <Navbar /> <div> {children} </div>
        </>
    )
}
```

go to app.tsx
```shell
import Layout from "../components/Layout";
```
insert Layout component in return

## Create 404 page
create a page for 404

## Access data
```shell
import Axios from "axios";
```
insert the following code
```shell
const List=({Data}) => {
    console.log(Data);
    return <div> </div>;
}

export const getStaticProps = async () => {
    const data = await Axios.get("http:mmmmmmmm");

    return {
        props: {
            Data: data.data,
        },
    };
};
export default List;
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
