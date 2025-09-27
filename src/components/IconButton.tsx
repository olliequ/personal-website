import { IoLogoGithub } from 'react-icons/io5'
import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'

interface IconButtonProps {
    href: string
    Icon: IconType
    className?: string
    iconColour?: string
}

export default function IconButton({ href, Icon, className, iconColour }: IconButtonProps) {
    const newTab = isExternalLink(href)

    return (
        <Link target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} href={href}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 ${className}`}>
                <Icon color={iconColour} size={20} />
            </div>
        </Link>
    )
}

function isExternalLink(href: string): boolean {
    return /^https?:\/\//i.test(href)
}
