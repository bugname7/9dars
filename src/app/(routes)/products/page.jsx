import Link from 'next/link';

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}

export default async function Products() {
    const products = await fetchProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Mahsulot Katalogi</h1>
            <hr className='mb-2'/>
            <div className="flex flex-wrap justify-between ">
                {products.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <div className="mb-4 h-[430px] w-[300px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform hover:shadow-xl  cursor-pointer p-4">
                            <img
                                className="w-full h-64 object-contain bg-gray-50 p-4"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="mt-4">
                                <h2 className="  mb-2">{product.title}</h2>
                                <p className="text-white py-2 rounded-md mt-5 font-medium text-center bg-black ">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
