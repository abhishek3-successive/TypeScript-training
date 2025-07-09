"use client";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "product-1", price: 10000 },
  { id: 2, name: "product-2", price: 12000 },
  { id: 3, name: "product-2", price: 15000 },
];

export default function Product() {
  const router = useRouter();
  return (
    <main>
      <h2>Product List</h2>

      <ul>
        {products.map((ele) => (
          <li key={ele.id}>
            {ele.name}
            <button onClick={() => router.push(`/Assignment3/product/${ele.id}`)}> Show Product </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
