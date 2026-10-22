"use client"
import React from 'react';
import Image from 'next/image';

const Banner = () => {

    const scrollToSection = () => {
        const element = document.getElementById('all-products');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (

        <div className='mt-5 flex p-4 justify-between max-w-6xl mx-auto items-center border rounded-3xl bg-[#FAFCFA] border-[#E1E8E1]'>
            <div>
                {date}
                <p>আজকের বাজারের দাম এক নজরে</p>
                <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button onClick={scrollToSection} className="px-6 py-2.5 bg-[#05893E] text-white font-medium rounded-xl shadow-md shadow-green-600">
                    সব পণ্য দেখুন
                </button>
            </div>

            <Image src="/bazar-hero.png" alt="Bazar_hero" width={315} height={263} />
        </div>
    );
};

export default Banner;