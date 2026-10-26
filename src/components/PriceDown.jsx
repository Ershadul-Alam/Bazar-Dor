import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const PriceDown = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    const downData = data.filter(product => product.change.dir === "down")
    const sortedDownData = [...downData].sort((a, b) => a.change.pct - b.change.pct);

    return (
        <div className='mt-14 mx-auto max-w-6xl'>
            <span className="text-green-600 mr-1">▼</span>
            <span className='text-black font-bold inline-block mb-2 text-2xl'>আজ দাম কমেছে</span>

            <div className='grid grid-cols-3 gap-5'>
                {sortedDownData.slice(0, 6).map(product =>
                    <Link href={`/marketPriceDetail/${product.id}`} key={product.id}>
                        <ProductCard key={product.id} detail={product} />
                    </Link>)}
            </div>
        </div>
    );
};

export default PriceDown;