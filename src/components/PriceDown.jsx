import React from 'react';
import ProductCard from './ProductCard';

const PriceDown = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    const downData = data.filter(product => product.change.dir === "down")
    const sortedDownData = [...downData].sort((a, b) => a.change.pct - b.change.pct);

    return (
        <div className='mt-4'>
            <span className="text-green-600 mr-1">▼</span>
            <span className='text-black'>আজ দাম কমেছে</span>

            <div className='grid grid-cols-3'>
            {sortedDownData.slice(0,6).map(product => <ProductCard key={product.id} detail={product}/>)}
            </div>
        </div>
    );
};

export default PriceDown;