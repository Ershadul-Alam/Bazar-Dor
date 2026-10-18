import Link from 'next/link';
import React from 'react';

const NavLinks = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data = await res.json()

    return (
        <div className='flex gap-5 justify-center'>
            {data.map((n,i) => <Link href="/" key={i}>
            {n.icon}{n.nameBn}
            </Link>)}
        </div>
    );
};

export default NavLinks;