import React from 'react'
import Layout from '@/components/common/Layout'
import './globals.css'
import { Poppins } from 'next/font/google'
import ToTop from '@/components/common/ToTop'
// import ErrorBoundary from '@/components/common/ErrorBoundary'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic']
})


export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} text-body`}>
                {/* <ErrorBoundary> */}
                    <Layout>{children}</Layout>
                {/* </ErrorBoundary> */}
                <ToTop />
            </body>
        </html>
    )
}
