// pages/Product.tsx
import { useRouteError } from 'react-router-dom';
import { fakeDb } from "../assets/db";


export async function loader({ params }: { params: { pid: string }}) {
	console.log("params >", params)
	const product = await fakeDb.getProduct(params.pid);
	console.log("product >", product)
	if(!product) {
		throw new Error("Product Not Found")
	}
	return product;
}


export default function Product({ loaderData }: { loaderData: { name: string, description: string } }) {
  const error = useRouteError(); // Tangani error jika ada

  if (error) {
    console.error("Error loading product:", error);
    return <div>Error loading product: {error.message}</div>;
  }

  console.log("loaderData:", loaderData); // Log loaderData untuk debugging

  const { name, description } = loaderData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}




// import type { Route } from "./+types/product";
// import { fakeDb } from "../assets/db";

// export async function loader({ params }: { params: { pid: string }}) {
// 	console.log("params >", params)
// 	const product = await fakeDb.getProduct(params.pid);
// 	console.log("product >", product)
// 	if(!product) {
// 		throw new Error("Product Not Found")
// 	}
// 	return product;
// }
// export default function Product({ loaderData }: { loaderData: { name: string, description: string } }) {
// 	console.log("fake >", loaderData)
// 	console.log("fake db >", fakeDb)
// 	console.log('hallo gays')

// 	try {
//         if (!loaderData) {
//             return <div>Loading..</div>;
//         }
//         const { name, description } = loaderData;
//         return (
//             <div>
//                 <h1>{name}</h1>
//                 <p>{description}</p>
//             </div>
//         );
//     } catch (error) {
//         console.error("Error loading product:", error);
//         return <div>Error loading product</div>;
//     }
// };