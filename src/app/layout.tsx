import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from '@/components/Navbar'
import VoxelModel from '@/components/3DModel'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Ollie',
    description: 'Made with <3',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="flex h-full">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Ollie's homepage" />
                <meta name="author" content="Oliver Quarm" />
                <link rel="icon" href="/images/favi.png"></link>
                <link rel="/images/apple-touch-icon" href="/images/apple-touch-icon.png" />
                <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Oliver Quarm" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:site_name" content="Oliver Quarm" />
                <meta name="og:title" content="Oliver Quarm" />
                <meta property="og:type" content="website" />
                <title>Ollie</title>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} flex flex-auto flex-col items-center antialiased`}>
                <ThemeProvider>
                    <Navbar />
                    <div className="w-[768px]">
                        {/* <LazyVoxelDog /> */}
                        <VoxelModel />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
