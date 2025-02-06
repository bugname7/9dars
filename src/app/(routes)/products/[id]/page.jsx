"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Mahsulotni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }



  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-12"
      >
        Home Products
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mt-4 text-center mx-auto w-[1200px] mt-12 ">
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-md object-contain bg-gray-50 p-4 border rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="text-center w-[800px]">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-medium text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
