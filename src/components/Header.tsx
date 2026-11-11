import { useEffect, useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
  const [hora, setHora] = useState<string>(
    new Date().toLocaleTimeString()
  )

  useEffect(() => {
    function actualizarHora() {
      setHora(new Date().toLocaleTimeString())
    }

    const intervalo = setInterval(actualizarHora, 1000)

    return () => {
      clearInterval(intervalo)
    }
  }, [])

  return (
  <header className="Header">
    <div className="empresa">
      <img src={logo} alt="Logo de Nexo"></img>
      <h1>Nexo</h1>
    </div>

    <p>{hora}</p>
  </header>
)
}

export default Header