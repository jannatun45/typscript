import { useRouteError, useLoaderData } from 'react-router-dom';
import { fakeDb } from "../assets/db";

export async function loader({ params }: { params: { pid: string }}) {
  const product = await fakeDb.getProduct(params.pid);
  if (!product) {
    throw new Error("Product Not Found")
  }
  return product;
}

export default function Product() {
  const loaderData = useLoaderData();
  
  if (!loaderData) {
    return <div>Loading...</div>;
  }

  const { name, description } = loaderData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}