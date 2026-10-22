"use client"
import { signOut, useSession } from '@/app/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const HeaderButtons = () => {

    const { data: session } = useSession()

    return (
        <div>
            {session?.user? 
            <>
            <p>Welcome, {session.user.name}</p>
            <span onClick={() => signOut()}>সাইন আউট </span>
            </> :
            <>
                <Link href="/signup" className='mr-4 font-bold'>
                    সাইন আপ
                </Link>
                <Link href="/signin"
                    className="px-6 py-2.5 font-bold bg-[#05893E] text-white rounded-xl shadow-md shadow-green-600">
                    সাইন ইন
                </Link>
            </>
            }
        </div>
    );
};

export default HeaderButtons;