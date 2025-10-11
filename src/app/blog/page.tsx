import AnimatedWrapper from '@/components/AnimatedWrapper'
import InfoSection from '@/components/InfoSection'
import PageContentWrapper from '@/components/PageContentWrapper'
import { getAllPosts } from '@/lib/blog-posts'

export const dynamic = 'error' // ensure full SSG
export const revalidate = false

export default function BlogPosts() {
    const posts = getAllPosts()

    return (
        <PageContentWrapper>
            <AnimatedWrapper delay={0.1}>
                <InfoSection
                    title="Blog Posts"
                    entries={posts.map((p, index) => ({
                        index: index,
                        title: p.title,
                        description: p.description ?? '',
                        imageUrl: p.image ?? '/images/nakatomi.jpeg',
                        href: `/blog/${p.slug}`,
                        subString: p.date
                            ? `Published on ${new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
                            : undefined,
                    }))}
                />
            </AnimatedWrapper>
        </PageContentWrapper>
    )
}
