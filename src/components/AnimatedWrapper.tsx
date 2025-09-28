'use client'

import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
}

interface AnimatedWrapperProps {
    delay?: number
    children: React.ReactNode
}

export default function AnimatedWrapper(props: AnimatedWrapperProps) {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'tween', ease: 'easeInOut', delay: props.delay ?? 0 }}
            style={{ position: 'relative' }}
        >
            {props.children}
        </motion.article>
    )
}
