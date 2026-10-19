import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const AllProducts = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    return (
        <div className='mx-auto max-w-6xl' id='all-products'>
            <p>সব পণ্য</p>
            <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে </p>
            <div className='grid grid-cols-3 gap-5'>
                {data.map(product => (
                    <Link href={`/marketPriceDetail/${product.id}`} key={product.id}>
                        <ProductCard detail={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;