import React from 'react'

interface PageContentWrapperProps {
    children: React.ReactNode
}

export default function PageContentWrapper({ children }: PageContentWrapperProps) {
    return <div className="z-[1] m-auto mt-[-190px] flex w-[600px] flex-col">{children}</div>
}
