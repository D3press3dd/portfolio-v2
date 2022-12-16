import { useRef, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { useColorContext } from '../hooks/useColorContext'
import { Moon, Sun } from '../styled-components'
import { gsap } from 'gsap'

import blackLogo from '../assets/logos/black-logo.png'
import whiteLogo from '../assets/logos/white-logo.png'

const MyCustomNavbar = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 5rem;
`

export const Navbar = (): JSX.Element => {
  const { color, handleTheme } = useColorContext()
  const iconsRef = useRef(null)

  const fill = color === 'dark' ? 'var(--white)' : 'var(--black)'

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      iconsRef.current,
      {
        rotation: '0',
        y: -20,
        opacity: 0
      },
      {
        rotation: '+=360',
        y: 0,
        opacity: 1,
        ease: 'back'
      }
    )

    return () => {
      animation.kill()
    }
  }, [color])

  return (
    <MyCustomNavbar>
      <img
        src={color === 'dark' ? whiteLogo : blackLogo}
        alt='logo'
        width={50}
      />
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <p style={{ fontWeight: 600 }}>Menu</p>
        {/* <span>linea</span> */}
        {/* <span>linea</span> */}
        <div
        role='button'
        tabIndex={0}
        onClick={handleTheme}
        onKeyDown={handleTheme}
        ref={iconsRef}
        style={{ maxWidth: 24, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        {color === 'dark' ? <Sun fill={fill} /> : <Moon fill={fill} />}
      </div>
      </div>

    </MyCustomNavbar>
  )
}
