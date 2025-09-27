'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// An enum that describes all the possible themes that a user can select. Note that the underlying type is represented as a string. This is easier to debug but still type-safe.
export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

// Second type representing what you can access from the context -- it contains two pieces of data.
export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

// Here we create the object that we will use to provide a context. We declare type associated with this context as <ThemeContextType> and we also provide default values. These default values are returned to consumers when there is no theme provider
export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Dark,
    toggleTheme: () => console.warn('No theme provider.'),
})

// Here we make a custom hook to make consuming the theme and its setter function more convenient.
export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
    children: React.ReactNode
}

// Make a component that manages the theme state and provides it to children.
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.Light)

    const toggleTheme = () => setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light))

    useEffect(() => {
        const root = document.documentElement
        if (theme === Theme.Dark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
