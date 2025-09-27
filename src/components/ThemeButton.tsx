'use client'

import { Theme, useTheme } from '@/app/context/ThemeContext'
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme()
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <button className="rounded-sm bg-[var(--theme-button-background)] p-3" onClick={toggleTheme}>
                    <Image width={16} height={16} alt={'sun'} src={theme == Theme.Dark ? '/icons/sun.svg' : '/icons/moon.svg'} />
                </button>
            </motion.div>
        </AnimatePresence>
    )
}
