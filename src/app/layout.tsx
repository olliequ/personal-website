import './globals.css'
import type { Metadata } from 'next'
import { Quicksand, Fira_Code } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from '@/components/Navbar'
import VoxelModel from '@/components/3DModel'
import Footer from '@/components/Footer'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-quicksand-sans',
})

const firaCode = Fira_Code({
    variable: '--font-firecode-mono',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
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
        <html lang="en" className="h-full">
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
            <body className={`${quicksand.variable} ${firaCode.variable} flex min-h-screen flex-col items-center antialiased`}>
                <ThemeProvider>
                    <Navbar />
                    <main className="flex max-w-[768px] flex-1 flex-col pt-[50px] font-sans sm:pt-0">
                        <VoxelModel />
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
