import rehypePrettyCode, { Options } from 'rehype-pretty-code'

const options: Options = {
    theme: 'one-dark-pro',
    keepBackground: true,
}

export const rehypePlugins = [[rehypePrettyCode, options]] as any
