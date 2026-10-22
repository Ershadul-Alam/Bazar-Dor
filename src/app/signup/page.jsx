"use client";

import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        try {
            const { data, error } = await authClient.signUp.email({
                ...user
            })

            if (error) {
                console.error("Sign-up failed:", error)
                alert(error.message || error.statusText || JSON.stringify(error))
                return
            }

            if (data) {
                router.push("/")
                }
        } catch (error) {
            console.error("Sign-up request failed:", error)
            alert(error instanceof Error ? error.message : String(error))
        }
    }

    return (
        <div className='mx-auto mt-10'>
            <p>একাউন্ট তৈরি করুন</p>
            <p className='mb-5'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দেখুন।</p>
            <form onSubmit={onSubmit}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    
                    <label className="label">নাম </label>
                    <input name="name" type="text" className="input" placeholder="যেমন: রহিম উদ্দিন" required />

                    <label className="label">ইমেল</label>
                    <input name="email" type="email" className="input" placeholder="you@example .com" required />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="কমপক্ষে 8 অক্ষর" minLength={8} required />

                    <button type="submit" className="btn btn-neutral border-0 mt-4 px-6 py-2.5 bg-[#05893E] text-white font-bold rounded-xl shadow-md shadow-green-600">একাউন্ট তৈরি করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUp;