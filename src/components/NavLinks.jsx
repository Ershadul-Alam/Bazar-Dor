import Link from 'next/link';
import React from 'react';

const NavLinks = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data = await res.json()

    return (
        <div className='flex gap-5 mt-4 mb-3 justify-center'>
            {data.map((n) => <Link href={`/category/${n.slug}`} key={n.id}>
            {n.icon}{n.nameBn}
            </Link>)}
        </div>
    );
};

export default NavLinks;