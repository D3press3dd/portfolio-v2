import { Routes, Route } from 'react-router-dom'

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<h1>Hola</h1>}/>
    </Routes>
  )
}

export default AppRouter
