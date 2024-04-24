import './App.css'
// import { Form } from './componentes/loginUsuarios/LoginForm'
import IniciarSesion from './componentes/btnInicio/iniciarSesion'
import { Logo } from './componentes/logo/logo'

function App() {


  return (
    <>
    <body className='body'>
      <header className='header'>
        <Logo></Logo>
        <IniciarSesion></IniciarSesion>
      </header>
      {/* <Form></Form> */}
    </body>
    </>
  )
}

export default App
