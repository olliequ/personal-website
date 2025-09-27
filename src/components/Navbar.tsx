'use client'

import React from 'react'
import ThemeButton from './ThemeButton'
import Image from 'next/image'
import { Theme, useTheme } from '@/app/context/ThemeContext'
import { IoLogoGithub } from 'react-icons/io5'

export default function Navbar() {
    const { theme } = useTheme()
    return (
        <header className="navbar fixed z-10 flex w-full flex-row justify-center bg-[var(--navbar-background)] p-2 backdrop-blur-lg">
            <div className="flex w-full max-w-[768px] flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-10">
                    {/* Home button & icon */}
                    <div className="group row flex gap-2">
                        <Image
                            className="transition-all duration-200 group-hover:rotate-45"
                            width={20}
                            height={20}
                            alt={'paw'}
                            src={theme == Theme.Light ? '/icons/paw.svg' : '/icons/paw-white.svg'}
                        />
                        <p className="text-lg font-semibold">Oliver Quarm</p>
                    </div>

                    {/* Nav links */}
                    <div className="flex gap-5">
                        <p className="hover:underline">Works</p>
                        <p className="hover:underline">Blog</p>
                        <div className="flex flex-row items-center gap-1">
                            <IoLogoGithub />
                            <p className="hover:underline">Source</p>
                        </div>
                    </div>
                </div>
                <ThemeButton />
            </div>
        </header>
    )
}
