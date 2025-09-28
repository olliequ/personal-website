import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/blogs'
import PageContentWrapper from '@/components/PageContentWrapper'
import AnimatedWrapper from '@/components/AnimatedWrapper'

type Props = { params: Promise<{ slug: string }> }

// generateStaticParams is called at build time to generate all the static paths for each possible blog post.
// This is required for SSG in Next.js app directory.
export async function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params

    const { meta } = getPostBySlug(slug)
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
            images: meta.image ? [meta.image] : [],
        },
    }
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const { meta, content } = getPostBySlug(slug)

    return (
        <PageContentWrapper>
            <AnimatedWrapper delay={0.2}>
                <div className="flex w-full flex-col">
                    <div className="flex w-fit flex-col">
                        <h1 className="text-3xl font-semibold">{meta.title}</h1>
                        <div className="animate-grow h-[2px] w-0 rounded-2xl bg-amber-600" />
                    </div>
                    {meta.date && (
                        <p className="pt-2 pb-10 italic">{`${new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}</p>
                    )}
                    {/* MDXRemote compiles at build time in RSC */}
                    <MDXRemote source={content} />
                </div>
            </AnimatedWrapper>
        </PageContentWrapper>
    )
}
