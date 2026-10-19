import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React, { Suspense } from 'react';

const CategoryDetails = async({params}) => {

    const {slug} = await params


    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`)
    const products = await res.json()
    const res2 = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const categories = await res2.json()

    const category = categories.find((item) => item.slug === slug)

    return (
        <div className='max-w-7xl mx-auto'>
            <div>
            {category?.icon}
            {category?.nameBn}
            {`${products.length}টি পণ্যের আজকের দাম ও পরিবর্তন`}
            </div>

            <div>
                {`মোট ${products.length}টি পণ্য দেখানো হচ্ছে`}

                <div className='grid grid-cols-3'>
                {products.map(product => 
                <Link href={`/marketPriceDetail/${product.id}`} key={product.id}>
                <ProductCard key={product.id} detail={product} />
                </Link>)}
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;