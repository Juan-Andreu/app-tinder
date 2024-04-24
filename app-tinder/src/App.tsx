import './App.css'
// import { Form } from './componentes/loginUsuarios/LoginForm'
import IniciarSesion from './componentes/btnInicio/iniciarSesion'
import { Logo } from './componentes/logo/logo'
import TextoInicio from './componentes/textInicio/textoInicio'
import 'google-fonts';

function App() {


  return (
    <>
    <body className='body'>
      <header className='header'>
        <Logo></Logo>
        <IniciarSesion></IniciarSesion>
      </header>
     <main>
      <TextoInicio></TextoInicio>
     </main>
    </body>
    </>
  )
}

export default App
