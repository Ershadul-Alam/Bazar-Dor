import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import NavLinks from './NavLinks';
import HeaderButtons from './HeaderButtons';


const Header = async() => {

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
                    <HeaderButtons/>
                </div>
            </div>
        </div>

    );
};

export default Header;