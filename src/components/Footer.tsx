import React from 'react'

export default function Footer() {
    return (
        <div className="flex w-full items-center justify-center pt-20 pb-4 font-sans text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Oliver Quarm. All Rights Reserved.
        </div>
    )
}
