import styled from '@emotion/styled'
import { useColorContext } from '../hooks/useColorContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

// const Container = styled('div')<{ $color: string }>`
const Container = styled.div<{ $image: string, $color: string }>`
  padding: 0 var(--side-padding);
  background-color: var(${props => props.$color});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 100vh;
  position: relative;

  @media (max-width: 640px) {
    padding: 0 calc(var(--side-padding) / 2);
  }

  @media (max-width: 340px) {
    padding: 0 calc(var(--side-padding) / 4);
  }
`
/* background: radial-gradient(circle, transparent 20%, var(--black) 100%), url(${props => props.$image}); */

// const colorTheme = {
//   light: 'linear-gradient(90deg, var(--white) 50%, var(--red) 50%)',
//   black: 'linear-gradient(90deg, var(--black) 50%, var(--red) 50%)'
// }

export const MyContainer = ({ children }: Props): JSX.Element => {
  const { color } = useColorContext()
  return (
    <Container
      $image={'hola'}
      $color={color === 'dark' ? '--black' : '--white'}
    >
      {children}
    </Container>
  )
}
