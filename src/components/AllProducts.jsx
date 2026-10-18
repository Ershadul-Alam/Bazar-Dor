import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    return (
        <div>
            <p>সব পণ্য</p>
            <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে </p>
            <div className='grid grid-cols-3'>
                {data.map(product => <ProductCard key={product.id} detail={product} />)}
            </div>
        </div>
    );
};

export default AllProducts;