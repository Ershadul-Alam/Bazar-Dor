"use client";

import { useState, useEffect } from "react";

export default function DateComponent() {
    const [date, setDate] = useState("");

    useEffect(() => {
        // This only runs on the client side, after initial load
        const formattedDate = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        });
        setDate(formattedDate);
    }, []);

    // Return empty or loading text until the client renders it
    if (!date) {
        return <div>Loading date...</div>;
    }

    return <div>{date}</div>;
}