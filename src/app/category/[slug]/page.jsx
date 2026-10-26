import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React, { Suspense } from 'react';

const CategoryDetails = async ({ params }) => {

    const { slug } = await params


    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`)
    const products = await res.json()
    const res2 = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const categories = await res2.json()

    const category = categories.find((item) => item.slug === slug)

    return (
        <div className='max-w-6xl w-full mx-auto'>
            <div className='p-4 border border-[#E1E8E1] rounded-xl flex items-center gap-3 bg-white mt-6'>
                <div className='text-3xl'>
                    {category?.icon}
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-2xl'>{category?.nameBn}</span>
                    <span className='text-sm text-gray-600'>{`${products.length}টি পণ্যের আজকের দাম ও পরিবর্তন`}</span>
                </div>
            </div>

            <div className='text-gray-600'>
                <div className='my-4'>
                    {`মোট ${products.length}টি পণ্য দেখানো হচ্ছে`}
                </div>

                <div className='grid grid-cols-3 gap-4'>
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