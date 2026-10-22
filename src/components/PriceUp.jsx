import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const PriceUp = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    const upData = data.filter(product => product.change.dir === "up")
    const sortedUpData = [...upData].sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className='mt-4 mx-auto max-w-6xl'>
            <span className="text-red-600 mr-1">▲</span>
            <span className='text-black'>আজ দাম বেড়েছে </span>

            <div className='grid grid-cols-3 gap-5'>
            {sortedUpData.slice(0, 6).map(product => (
                <Link href={`/marketPriceDetail/${product.id}`} key={product.id}>
                    <ProductCard detail={product} />
                </Link>
            ))}
            </div>
        </div>
    );
};

export default PriceUp;