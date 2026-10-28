import { NextResponse } from 'next/server'
import { auth } from "./app/lib/auth";
import { headers } from "next/headers";


export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers,
    })

    const user = session?.user
    if(!user){
        return NextResponse.redirect(new URL('/signup', request.url))
    } 
    }



export const config = {
    matcher: ['/profile', '/category/:path*', '/marketPriceDetail/:path*'],
}