"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TRRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Immediate redirect
        router.replace('/');
    }, [router]);

    return (
        <html className="bg-[#070712] text-white overflow-hidden h-screen">
            <head>
                <meta name="robots" content="noindex" />
                <title>Redirecting...</title>
            </head>
            <body className="flex items-center justify-center h-screen w-screen flex-col gap-4">
                {/* 301-style client redirect feedback */}
                <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm font-mono animate-pulse">Redirecting to Reklamatic.ai...</p>
            </body>
        </html>
    );
}
