'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isExternalLink } from './IconButton'
import { useInView } from 'react-intersection-observer'

export interface SectionEntryProps {
    index?: number
    title: string
    description: string
    imageUrl: string
    href: string
    iconUrls?: string[]
    subString?: string
}

export default function SectionEntry(props: SectionEntryProps) {
    const newTab = isExternalLink(props.href)
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
    const containerRef = React.useRef<HTMLAnchorElement | null>(null)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const ref = (node: HTMLAnchorElement) => {
        inViewRef(node)
        containerRef.current = node
    }

    React.useEffect(() => {
        if (!inView || props.index === undefined) return

        const animate = () => {
            if (!containerRef.current) return
            containerRef.current?.classList.remove('translate-y-[30px]', 'opacity-0')
            containerRef.current?.classList.add('translate-y-0', 'opacity-100')
        }

        // if ()
        timeoutRef.current = setTimeout(animate, props.index * 100)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [inView, props.index])

    return (
        <Link
            ref={ref}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            href={props.href}
            className={`${props.index !== undefined ? 'translate-y-[30px] opacity-0' : 'translate-y-0 opacity-100'} transition-all duration-500 ease-in-out`}
        >
            <div className="group flex w-full cursor-pointer flex-row items-center gap-4 sm:items-start sm:gap-6">
                <Image
                    src={props.imageUrl}
                    alt="mainImage"
                    width={96}
                    height={96}
                    className="h-[60px] w-[60px] rounded-2xl object-contain sm:h-[96px] sm:w-[96px]"
                />
                <div className="flex flex-col gap-2 sm:gap-3">
                    <h2 className="text-lg leading-[1.3] font-semibold group-hover:underline sm:text-xl">{props.title}</h2>
                    <p className="text-sm text-gray-600 sm:text-justify sm:text-base dark:text-gray-300">{props.description}</p>
                    {props.iconUrls && (
                        <div className="flex flex-row gap-3">
                            {props.iconUrls.map((iconUrl, index) => (
                                <Image
                                    key={index}
                                    src={iconUrl}
                                    alt={`Icon ${index}`}
                                    width={20}
                                    height={20}
                                    className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                                />
                            ))}
                        </div>
                    )}
                    {props.subString && <p className="text-[10px] text-amber-600 italic sm:text-xs">{props.subString}</p>}
                </div>
            </div>
        </Link>
    )
}
