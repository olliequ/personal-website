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
                className="flex h-10 cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-2 font-medium text-white transition-all duration-100 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                onClick={onClick}
            >
                {text}
                {Icon && <Icon className="color-black dark:bg-white" size={16} />}
            </div>
        </Link>
    )
}
