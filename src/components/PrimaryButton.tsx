import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface PrimaryButtonProps {
    text: string
    onClick?: () => void
    Icon?: IconType
    downloadResume?: boolean
    href: string
}

export default function PrimaryButton({ text, Icon, onClick, downloadResume, href }: PrimaryButtonProps) {
    return (
        <Link download={downloadResume ? true : false} href={href} passHref>
            <div
                className="flex h-9 cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-gray-950 px-2 py-1 text-sm font-medium text-white transition-all duration-100 hover:bg-gray-800 sm:h-10 sm:px-4 sm:py-2 sm:text-[16px] dark:bg-white dark:text-black dark:hover:bg-gray-200"
                onClick={onClick}
            >
                {text}
                {Icon && <Icon className="color-black dark:bg-white" size={16} />}
            </div>
        </Link>
    )
}
