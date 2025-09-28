'use client'

import React from 'react'
import ThemeButton from './ThemeButton'
import Image from 'next/image'
import { Theme, useTheme } from '@/app/context/ThemeContext'
import Link from 'next/link'

export default function Navbar() {
    const { theme } = useTheme()
    return (
        <header className="navbar fixed z-10 flex w-full flex-row justify-center bg-[var(--navbar-background)] p-2 font-sans backdrop-blur-lg">
            <div className="flex w-full max-w-[768px] flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-10">
                    {/* Home button & icon */}
                    <Link href={'/'}>
                        <div className="group row flex gap-1 hover:cursor-pointer hover:opacity-80">
                            <Image
                                className="transition-all duration-200 group-hover:rotate-45"
                                width={20}
                                height={20}
                                alt={'paw'}
                                src={theme == Theme.Light ? '/icons/paw.svg' : '/icons/paw-white.svg'}
                            />
                            <p className="text-lg font-semibold">Ollie</p>
                        </div>
                    </Link>

                    {/* Nav links */}
                    <div className="flex gap-5">
                        <Link href={'/blogs'}>
                            <p className="hover:underline">Blogs</p>
                        </Link>
                    </div>
                </div>
                <ThemeButton />
            </div>
        </header>
    )
}
