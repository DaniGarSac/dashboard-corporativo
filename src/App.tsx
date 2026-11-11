import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import './styles/App.css'
import Personal from './views/Personal'
import Inventario from './views/Inventario'
import Incidencias from './views/Incidencias'
import { useState } from 'react'

function App() {

   const [pestanaActiva, setPestanaActiva] = useState('Personal')

  function cambiarPestana(nombre: string) {
    setPestanaActiva(nombre)
  }

  return (
    <div className="app">
      <Header></Header>

      <Sidebar cambiarPestana={cambiarPestana}></Sidebar>

      <main className="contenido">
        
        {pestanaActiva == 'Personal' && <Personal />}
        {pestanaActiva == 'Inventario' && <Inventario />}
        {pestanaActiva == 'Incidencias' && <Incidencias />}

      </main>
    </div>
  )
}

export default App