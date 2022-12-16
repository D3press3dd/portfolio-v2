import { ContactButton, Navbar } from './components'
import AppRouter from './Router/AppRouter'
import { MyContainer } from './styled-components/'

function Portfolio (): JSX.Element {
  return (
    <MyContainer>
      <Navbar />
      <AppRouter />
      <ContactButton/>
    </MyContainer>
  )
}

export default Portfolio
