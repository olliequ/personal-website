import React from 'react'
import SectionEntry, { SectionEntryProps } from './SectionEntry'

interface InfoSectionProps {
    title: string
    entries: SectionEntryProps[]
}

export default function InfoSection({ title, entries }: InfoSectionProps) {
    return (
        <section className="flex w-full flex-col gap-6 px-4 sm:gap-8 sm:px-0">
            <h1 className="text-[22px] font-semibold sm:text-[26px]">{title}</h1>
            <div className="flex flex-col gap-10">
                {entries.map((entry, index) => (
                    <SectionEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
}
