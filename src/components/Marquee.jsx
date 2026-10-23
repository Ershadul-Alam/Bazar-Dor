import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    'use cache'

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    return (
        <div className='border-y border-[#E1E8E1] bg-[#FAFCFA]'>
            <MarqueeText direction='right' duration={10}>
            {data.map(n => 
            
            <Link href={`/marketPriceDetail/${n.id}`} key={n.id}>
            {n.image} {n.nameBn}{`${n.today} টাকা/${n.unit} `}
            {n.change.dir === 'up' ?
            <span className="text-red-600 mr-5">▲{n.change.pct}%</span> :
            <span className="text-green-600 mr-5">▼{-n.change.pct}%</span>}
            </Link>)}
            </MarqueeText>
        </div>
    );
};

export default Marquee;