import Divider from '@/components/Divider'
import InfoSection from '@/components/InfoSection'
import NameCard from '@/components/NameCard'

export default function Home() {
    return (
        <div className="m-auto mt-[-190px] flex w-[600px] flex-col items-center justify-between">
            <div className="flex items-center justify-center rounded-lg bg-[var(--greeting-card-background)] p-3 backdrop-blur-lg">
                Hey there! I&apos;m a software engineer based in Sydney, Australia!
            </div>
            <div className="h-10" />
            <NameCard />
            <Divider />
            <InfoSection
                title="Work Experience"
                entries={[
                    {
                        title: 'Nakatomi - Software Developer',
                        description: "Since 2023 I've been helping Nakatomi bring ideas to life through code and creative technical solutions.",
                        imageUrl: '/images/nakatomi.jpeg',
                    },
                ]}
            />
            <Divider />
            <InfoSection
                title="Projects"
                entries={[
                    {
                        title: 'Ovum AI',
                        description:
                            // eslint-disable-next-line max-len
                            'Built the MVP for Ovum’s AI-powered health app from scratch, growing early users and securing $1.6M funding, now leading its production build with stakeholders.',
                        imageUrl: '/images/property-panda.png',
                        iconUrls: ['/images/flutter.png', '/images/swift.png', '/images/typescript.png'],
                    },
                    {
                        title: 'Machine Learning Reinforced Trading Bot',
                        description:
                            'Developed a profitable, fully autonomous crypto trading bot using machine learning, with real-time data processing, adaptive classifier training, and customizable architecture for assets, features, and strategies.',
                        imageUrl: '/images/property-panda.png',
                        iconUrls: ['/images/python.png'],
                    },
                    {
                        title: 'PropertyPanda',
                        description:
                            'Built a full-stack property listing app with React, NextJS, and MongoDB, featuring 1,500+ listings and a polished, UX-focused front-end.',
                        imageUrl: '/images/property-panda.png',
                        iconUrls: ['/images/typescript.png', '/images/react.png', '/images/css-3.png'],
                    },
                ]}
            />
        </div>
    )
}
