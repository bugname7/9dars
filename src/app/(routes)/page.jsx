import React from 'react';

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}

export default async function Product() {
    const data = await fetchProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <img
                            className="w-full h-64 object-contain p-4 bg-gray-50"
                            src={product.image}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-4 font-medium">${product.price}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
