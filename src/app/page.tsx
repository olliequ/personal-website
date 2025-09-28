import Divider from '@/components/Divider'
import InfoSection from '@/components/InfoSection'
import NameCard from '@/components/NameCard'

export default function Home() {
    return (
        <div className="z-[1] m-auto mt-[-190px] flex w-[600px] flex-col items-center justify-between">
            <div className="flex items-center justify-center rounded-lg bg-[var(--greeting-card-background)] p-3 backdrop-blur-lg">
                Hey there! I&apos;m a software engineer based in Sydney, Australia!
            </div>
            <div className="h-10" />
            <NameCard />
            <Divider />
            <InfoSection
                title="Projects"
                entries={[
                    {
                        title: 'Ovum AI',
                        description:
                            // eslint-disable-next-line max-len
                            'Built the MVP for Ovum’s AI-powered health app from scratch, growing early users and securing $1.6M funding, now leading its production build with stakeholders.',
                        imageUrl: '/icons/ovum-main.svg',
                        href: 'https://www.askovum.com/',
                        iconUrls: ['/images/flutter.png', '/images/swift.png', '/images/typescript.png'],
                    },
                    {
                        title: 'Machine Learning Reinforced Trading Bot',
                        description:
                            'Developed a profitable, fully autonomous crypto trading bot using machine learning, with real-time data processing, adaptive classifier training, and customizable architecture for assets, features, and strategies.',
                        imageUrl: '/images/stock-market.png',
                        href: 'https://github.com/olliequ/MachineLearningTradingBot',
                        iconUrls: ['/images/python.png'],
                    },
                    {
                        title: 'PropertyPanda',
                        description:
                            'Built a full-stack property listing app with React, NextJS, and MongoDB, featuring 1,500+ listings and a polished, UX-focused front-end.',
                        imageUrl: '/images/placeholder.png',
                        href: 'https://github.com/olliequ/MachineLearningTradingBot',
                        iconUrls: ['/images/typescript.png', '/images/react.png', '/images/css-3.png'],
                    },
                ]}
            />
            <Divider />
            <InfoSection
                title="Work Experience"
                entries={[
                    {
                        title: 'Nakatomi - Software Developer',
                        description: "Since 2023 I've been helping Nakatomi bring ideas to life through code and creative technical solutions.",
                        imageUrl: '/images/nakatomi.jpeg',
                        href: 'https://nakatomi.com/',
                    },
                ]}
            />
            <Divider />
            <InfoSection
                title="Education"
                entries={[
                    {
                        title: 'University of Melbourne',
                        description:
                            'Completed a Master of Information Technology (Computing, 2021–2023) with an exchange semester at UIUC in America, following a Bachelor of Science in Chemical Engineering.',
                        imageUrl: '/images/unimelb.svg',
                        href: 'https://www.unimelb.edu.au/',
                    },
                    {
                        title: 'The Alice Smith School',
                        description:
                            'Completed both IGCSEs and A Levels (A*AA) here at the best school in Malaysia -- this should fire up the GIS and ISKL lot!',
                        imageUrl: '/images/alice-smith.png',
                        href: 'https://www.alice-smith.edu.my/',
                    },
                ]}
            />
        </div>
    )
}
