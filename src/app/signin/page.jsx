"use client"
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";


const SignIn = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const { data, error } = await authClient.signIn.email({
                email: formData.get("email"),
                password: formData.get("password"),
                callbackURL: "/",
            })

            if (error) {
                console.error("Sign-in failed:", error)
                alert(error.message || error.statusText || JSON.stringify(error))
                return
            }

            if (data) {
                router.push("/")
            }
        } catch (error) {
            console.error("Sign-in request failed:", error)
            alert(error instanceof Error ? error.message : String(error))
        }
    }

        return (
            <div className='mx-auto mt-10'>
                <p>সাইন ইন</p>
                <p className='mb-5'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>

                <form onSubmit={onSubmit}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        <label className="label">ইমেল</label>
                        <input name="email" type="email" className="input" placeholder="you@example.com" required />

                        <label className="label">পাসওয়ার্ড</label>
                        <input name="password" type="password" className="input" placeholder="কমপক্ষে 8 অক্ষর" required />

                        <button type="submit" className="btn btn-neutral border-0 mt-4 px-6 py-2.5 bg-[#05893E] text-white font-bold rounded-xl shadow-md shadow-green-600">সাইন ইন</button>
                    </fieldset>
                </form>
            </div>
        );
    };

    export default SignIn;