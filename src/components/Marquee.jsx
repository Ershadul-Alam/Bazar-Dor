import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const data = await res.json()

    return (
        <div>
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