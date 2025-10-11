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
        <div
            className={`z-[1] m-auto mt-[-70px] flex sm:mt-[-190px] ${size === PageContentWidthOptions.WIDE ? 'max-w-[768px]' : 'max-w-[600px]'} flex-col`}
        >
            {children}
        </div>
    )
}
