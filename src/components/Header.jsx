import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import NavLinks from './NavLinks';
import { connection } from 'next/server';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"   
    })
    console.log(date);

    return (
        <div className='max-w-7xl mx-auto mt-3'>
            <Link href={"/"} className='flex gap-1'>
            <div className='bg-green-600 inline-block p-2 rounded-lg'>
            <Image src="/logo-icon.png" 
                    alt="Bazar Dor" 
                    width={25} 
                    height={25}
                    />
            </div>
            <div>
            <p className='font-bold'>বাজার দর </p>
            <div>{date}</div>
            </div>
            </Link>

            <Suspense fallback="Loading...">
            <NavLinks />
            </Suspense>
        </div>

    );
};

export default Header;