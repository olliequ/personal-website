// Parse frontmatter, and expose helpers to read blog posts from the filesystem.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

export type PostMeta = {
    slug: string
    title: string
    description?: string
    date?: string
    image?: string
}

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
    const fullPath = path.join(POSTS_DIR, `${slug}.mdx`)
    const file = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(file)
    const meta: PostMeta = {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: data.date ?? '',
        image: data.image ?? '',
    }
    return { meta, content }
}

export function getAllPosts(): PostMeta[] {
    return getPostSlugs()
        .map((slug) => getPostBySlug(slug).meta)
        .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}
