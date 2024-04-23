import './App.css'
import { Nav } from './componentes/nav/nav'
import { Card } from './componentes/cardUsuarios/CardUsuarios'
import LoginForm from './componentes/loginUsuarios/LoginForm'


function App() {

  return (
    <>
    <div>
      <LoginForm onLoginSuccess={function (): void {
          throw new Error('Function not implemented.')
        } }></LoginForm>
    </div>
      <div>
        <Nav></Nav>
       <Card user={{
          id: 0,
          name: '',
          age: 0,
          imageUrl: '',
          description: '',
          interests: []
        }} onSwipeLeft={function (): void {
          throw new Error('Function not implemented.')
        } } onSwipeRight={function (): void {
          throw new Error('Function not implemented.')
        } }></Card>
      </div>
    </>
  )
}

export default App
