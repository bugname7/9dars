"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetail({ params }) {
    const { id } = params;
    const [product, setProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => setProduct(data))
                .catch((err) => console.error(err));
        }
    }, [id]);

    if (!product) return <p>Yuklanmoqda...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                className="w-64 h-64 object-contain my-4"
            />
            <p className="text-gray-600">${product.price}</p>
            <p className="text-md my-2">{product.description}</p>
        </div>
    );
}
