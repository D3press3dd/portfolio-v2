import { useState } from 'react'
import styled from '@emotion/styled'

import eyePng from '../assets/eye-icon/icon-hireus.png'
import eyeGif from '../assets/eye-icon/icon-hireus.gif'

const EyeContainer = styled.div`
  background-color: var(--red);
  max-width: 80px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  right: var(--side-padding);
  bottom: 20px;

  @media (max-width: 640px) {
    right: calc(var(--side-padding) / 2);
    max-width: 40px;
  }

  @media (max-width: 340px) {
    right: calc(var(--side-padding) / 4);
  }
`

export const ContactButton = (): JSX.Element => {
  const [image, setImage] = useState(eyePng)
  console.log()

  const handleEnterMouse = (): void => {
    setImage(eyeGif)
  }

  const handleLeaveMouse = (): void => {
    setImage(eyePng)
  }
  return (
    <EyeContainer id='eye-container'
      onMouseOver={handleEnterMouse}
      onMouseLeave={handleLeaveMouse}
    >
      <img src={image} alt='eye icon' />
    </EyeContainer>
  )
}
