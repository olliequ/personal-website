import React from 'react'
import SectionEntry, { SectionEntryProps } from './SectionEntry'

interface InfoSectionProps {
    title: string
    entries: SectionEntryProps[]
}

export default function InfoSection({ title, entries }: InfoSectionProps) {
    return (
        <section className="flex w-full flex-col gap-8">
            <h1 className="text-[26px] font-semibold">{title}</h1>
            <div className="flex flex-col gap-10">
                {entries.map((entry, index) => (
                    <SectionEntry key={index} {...entry} />
                ))}
            </div>
        </section>
    )
}
