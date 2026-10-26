"use client"
import { authClient } from '../lib/auth-client';
import GalleryUploadButton from '../../components/GalleryUploadButton';

const page = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user;

    const HandleUpdateProfile = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newUserData = Object.fromEntries(formData.entries())

        await authClient.updateUser({
            ...newUserData
        })
    }

    return (
        <div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-8 flex items-center justify-between w-full max-w-xl mx-auto">

                {/* Left Section: Avatar & User Info */}
                <div className="flex items-center gap-4">
                    {/* Avatar with fallback */}
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img
                                    alt={user?.name || 'Profile picture'}
                                    src={user?.image || "Avatar-Profile-PNG-Image.png"}
                                />
                            </div>
                        </div>

                        {/* <Image
                        src={user?.image || "/Avatar-Profile-PNG-Image.png"}
                        alt={user?.name || 'Profile picture'}
                        fill
                        className="object-cover"
                        /> */}
                    </div>

                    {/* Name and Email */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            {user?.name || 'Anonymous User'}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {user?.email || 'No email provided'}
                        </p>
                    </div>
                </div>

                {/* Right Section: Sign Out Button */}
                <button
                    onClick={() => authClient.signOut()}
                    className="flex items-center gap-2 px-5 py-2.5 border border-red-500 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                    </svg>
                    সাইন আউট
                </button>
            </div>

            <form onSubmit={HandleUpdateProfile}
                className="bg-white label flex flex-col rounded-3xl shadow-sm border border-gray-100 items-stretch justify-between w-full max-w-xl mx-auto mt-8">
                <p className='p-4'>তথ্য হালনাগাদ</p>
                <div className='px-6 pb-6'>
                    <div className='flex flex-col mb-6'>
                        <label className="label">নাম:</label>
                        <input name="name" type="text" className="input w-full" placeholder="নাম পরিবর্তন করুন" required />
                    </div>

                    <div className='flex flex-col mb-6'>
                        <label className="label">ছবি:</label>
                        <input name="image" type="text" className="input w-full" placeholder="ছবির লিঙ্ক" required />

                    </div>
                    <button type="submit" className="btn btn-neutral w-full border-0 px-6 py-2.5 bg-[#05893E] text-white font-bold rounded-xl shadow-md shadow-green-600">আপডেট</button>
                </div>

            </form>
        </div>
    );
};

export default page;