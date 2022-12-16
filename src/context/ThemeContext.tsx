import { createContext, useState, useLayoutEffect } from 'react'
import { ThemeColor } from '../interface'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const colorInStorage = JSON.parse(localStorage.getItem('theme') as string) ?? { color: 'dark' }

export const ThemeContextColors = createContext<ThemeColor>({ color: 'dark' })

export const ThemeContext = ({ children }: Props): JSX.Element => {
  const [{ color }, setThemeColor] = useState<ThemeColor>(() => colorInStorage)

  const handleTheme = (): void => {
    if (color === 'dark') {
      setThemeColor({ color: 'light' })
    } else {
      setThemeColor({ color: 'dark' })
    }
  }

  useLayoutEffect(() => {
    localStorage.setItem('theme', JSON.stringify({ color }))
    document.body.style.color = color === 'dark' ? 'var(--white)' : 'var(--black)'
  }, [color])
  return (
    <ThemeContextColors.Provider value={{ color, handleTheme }}>
      {children}
    </ThemeContextColors.Provider>
  )
}
