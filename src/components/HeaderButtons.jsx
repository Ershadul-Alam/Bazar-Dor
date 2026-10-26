"use client"
import { signOut, useSession } from '@/app/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const HeaderButtons = () => {

    // <p>Welcome, {session.user.name}</p>
    // <span onClick={() => signOut()}>সাইন আউট </span>


    const { data: session } = useSession()

    return (


        <div>
            {session?.user ?
                <>
                    <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer m-1">{session.user.name} ⤵</div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><Link href="/profile">প্রোফাইল</Link></li>
                    <li onClick={() => signOut()}>সাইন আউট</li>
                </ul>
            </div>
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