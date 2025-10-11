import React from 'react'

export enum PageContentWidthOptions {
    SMALL,
    WIDE,
}

interface PageContentWrapperProps {
    children: React.ReactNode
    size?: PageContentWidthOptions
}

export default function PageContentWrapper({ children, size = PageContentWidthOptions.SMALL }: PageContentWrapperProps) {
    return (
        <div className={`z-[1] m-auto mt-[-190px] flex ${size === PageContentWidthOptions.WIDE ? 'w-[768px]' : 'w-[600px]'} flex-col`}>
            {children}
        </div>
    )
}
