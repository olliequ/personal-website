import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isExternalLink } from './IconButton'

export interface SectionEntryProps {
    title: string
    description: string
    imageUrl: string
    href: string
    iconUrls?: string[]
}

export default function SectionEntry(props: SectionEntryProps) {
    const newTab = isExternalLink(props.href)

    return (
        <Link target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} href={props.href}>
            <div className="group flex w-full cursor-pointer flex-row gap-6">
                <Image src={props.imageUrl} alt="mainImage" width={96} height={96} className="h-[96px] w-[96px] rounded-2xl object-contain" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold group-hover:underline">{props.title}</h2>
                    <p className="text-[14px] text-gray-600 dark:text-gray-300">{props.description}</p>
                    <div className="flex flex-row gap-3">
                        {props.iconUrls &&
                            props.iconUrls.map((iconUrl, index) => (
                                <Image key={index} src={iconUrl} alt={`Icon ${index}`} width={20} height={20} className="h-5 w-5 object-contain" />
                            ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
