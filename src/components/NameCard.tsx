import React from 'react'
import IconButton from './IconButton'
import { IoDownload, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

export default function NameCard() {
    return (
        <div className="flex w-full flex-row items-center justify-between gap-8">
            <div className="relative min-h-[150px] min-w-[150px] overflow-hidden rounded-full border-2 border-black dark:border-white">
                <Image src={'/images/headshot.jpeg'} alt={'headshot'} fill priority className="object-cover object-center" />
            </div>
            <div className="flex h-full flex-col items-start gap-4">
                <p className="text-4xl font-semibold">Oliver Quarm</p>
                <p className="text-md text-gray-500 dark:text-gray-200">
                    I excel at all things TypeScript, React, Rust, Swift and Flutter. I love building beautiful, performant apps that solve real
                    problems -- read my blog posts for ramblings!
                </p>
                <div className="flex flex-row gap-3">
                    <IconButton
                        href={'https://www.linkedin.com/in/oliverquarm/'}
                        className="bg-blue-100 hover:bg-blue-200"
                        iconColour="blue"
                        Icon={IoLogoLinkedin}
                    />
                    <IconButton href={'https://github.com/olliequ'} className="bg-gray-100 hover:bg-gray-300" iconColour="grey" Icon={IoLogoGithub} />
                    <IconButton href={'mailto:ollieeeq@gmail.com'} className="bg-green-100 hover:bg-green-200" iconColour="green" Icon={IoMail} />
                    <PrimaryButton downloadResume href="/resume.pdf" text={'Download CV'} Icon={IoDownload} />
                </div>
            </div>
        </div>
    )
}
