import { useContext } from 'react'
import { ThemeContextColors } from '../context/'
import { ThemeColor } from '../interface'

export const useColorContext = (): ThemeColor => {
  const { color, handleTheme } = useContext(ThemeContextColors)
  return {
    color, handleTheme
  }
}
