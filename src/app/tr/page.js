"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TRRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, [router]);

    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content="0;url=/" />
            </head>
            <body>
            </body>
        </html>
    );
}
