import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import NavLinks from './NavLinks';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"   
    })

    return (
        <div className='bg-[#FAFCFA]'>
        <div className='max-w-6xl mx-auto mt-3 flex justify-between'>
            <div>
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

            <div className='items-center'>
                <Link href="/signup" className='mr-4 font-bold'>
                    সাইন আপ 
                </Link> 
                <Link href="/signin"
                className="px-6 py-2.5 font-bold bg-[#05893E] text-white rounded-xl shadow-md shadow-green-600">
                    সাইন ইন 
                </Link>
            </div>
        </div>
        </div>

    );
};

export default Header;