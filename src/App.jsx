import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Button} from '@material-tailwind/react'
import Navbar from './components/NavBar'
import PrestamoFormulario from './components/PrestamoFormulario'
import ListadoPrestamos from './components/ListadoPrestamos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='contenedor overflow-y-scroll '>
          {/* <PrestamoFormulario/> */}
          <ListadoPrestamos/>
      </div>
      
    </>
  )
}

export default App
