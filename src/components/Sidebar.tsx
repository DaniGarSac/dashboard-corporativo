import '../styles/Sidebar.css'

interface SidebarProps {
  cambiarPestana: (nombre: string) => void
}

function Sidebar(props: SidebarProps) {
  function mostrarPersonal() {
    props.cambiarPestana('Personal')
  }

  function mostrarInventario() {
    props.cambiarPestana('Inventario')
  }

  function mostrarIncidencias() {
    props.cambiarPestana('Incidencias')
  }

  return (
    <nav className="Sidebar">
      <button onClick={mostrarPersonal}>Personal</button>
      <button onClick={mostrarInventario}>Inventario</button>
      <button onClick={mostrarIncidencias}>Incidencias</button>
    </nav>
  )
}

export default Sidebar