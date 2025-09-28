import InfoSection from '@/components/InfoSection'
import { getAllPosts } from '@/lib/blogs'

export const dynamic = 'error' // ensure full SSG
export const revalidate = false

export default function Blogs() {
    const posts = getAllPosts()

    return (
        <div>
            <InfoSection
                title="Blog Posts"
                entries={posts.map((p) => ({
                    title: p.title,
                    description: p.description ?? '',
                    imageUrl: p.image ?? '/images/nakatomi.jpeg',
                    href: `/blogs/${p.slug}`,
                }))}
            />
        </div>
    )
}
