import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/blog-posts'
import PageContentWrapper, { PageContentWidthOptions } from '@/components/PageContentWrapper'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import { rehypePlugins } from '@/lib/mdx'
import React from 'react'
import type { JSX } from 'react'

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
        <PageContentWrapper size={PageContentWidthOptions.WIDE}>
            <AnimatedWrapper delay={0.2}>
                <div className="flex w-full flex-col">
                    <div className="flex w-fit flex-col">
                        <h1 className="text-3xl font-semibold">{meta.title}</h1>
                        <div className="animate-grow h-[2px] w-0 rounded-2xl bg-amber-600" />
                    </div>
                    {meta.date && (
                        <p className="pt-2 pb-10 italic">{`${new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}</p>
                    )}
                    <div className="markdown-content-block flex flex-col gap-4 text-justify">
                        {/* MDXRemote compiles at build time in RSC. It serializes markdown to TSX. */}
                        <MDXRemote
                            source={content}
                            options={{ mdxOptions: { rehypePlugins } }}
                            components={{
                                pre: (props: JSX.IntrinsicElements['pre'] & { 'data-language'?: string }) => (
                                    <>
                                        <figcaption className="flex items-center justify-between rounded-t-lg border-x border-t border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
                                            <span className="text-sm text-zinc-700 dark:text-zinc-300">{props['data-language']}</span>
                                            {/* <CopyButton text={reactToText(props.children)} /> */}
                                        </figcaption>
                                        <pre
                                            className="relative rounded-t-none rounded-b-lg border border-zinc-200 bg-zinc-100 px-0 py-4 text-4xl text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-[#abb2bf]"
                                            {...props}
                                        />
                                    </>
                                ),
                                ul: (props) => <ul className="my-3 list-disc space-y-1 pl-6" {...props} />,
                                ol: (props) => <ol className="my-3 list-decimal space-y-1 pl-6" {...props} />,
                                li: (props) => <li className="[&>ol]:mt-1 [&>ul]:mt-1" {...props} />,
                            }}
                        />
                    </div>
                </div>
            </AnimatedWrapper>
        </PageContentWrapper>
    )
}
