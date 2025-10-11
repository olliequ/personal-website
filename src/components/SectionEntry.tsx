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
            className={`translate-y-[30px] ${props.index !== undefined ? 'opacity-0' : 'opacity-100'} transition-all duration-500 ease-in-out`}
        >
            <div className="group flex w-full cursor-pointer flex-row gap-6">
                <Image src={props.imageUrl} alt="mainImage" width={96} height={96} className="h-[96px] w-[96px] rounded-2xl object-contain" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold group-hover:underline">{props.title}</h2>
                    <p className="text-[15px] text-gray-600 dark:text-gray-300">{props.description}</p>
                    {props.iconUrls && (
                        <div className="flex flex-row gap-3">
                            {props.iconUrls.map((iconUrl, index) => (
                                <Image key={index} src={iconUrl} alt={`Icon ${index}`} width={20} height={20} className="h-5 w-5 object-contain" />
                            ))}
                        </div>
                    )}
                    {props.subString && <p className="text-xs text-amber-600 italic">{props.subString}</p>}
                </div>
            </div>
        </Link>
    )
}
