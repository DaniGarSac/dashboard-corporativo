import { useState } from 'react'
import CuadroIncidencia from '../components/CuadroIncidencia'
import '../styles/Incidencias.css'

interface Incidencia {
  id: number
  title: string
  completed: boolean
}

function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([])
  const [cargando, setCargando] = useState<boolean>(false)

  async function cargarIncidencias() {
    setCargando(true)

    const listaIncidencias: Incidencia[] = []
    let datos: Incidencia[] = []

    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=8'
      )

      if (!res.ok) {
        throw new Error('Error al consultar la API')
      }

      datos = await res.json()

      for (let i = 0; i < datos.length; i++) {
        const incidenciaConsulta: Incidencia = {
          id: datos[i].id,
          title: datos[i].title,
          completed: datos[i].completed
        }

        listaIncidencias[i] = incidenciaConsulta
      }

      setIncidencias(listaIncidencias)
    } catch (e) {
      console.log(`Error en el fetch: ${e}`)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div>
      <h2>Incidencias</h2>

      <button onClick={cargarIncidencias} disabled={cargando}>
        Cargar incidencias
      </button>

      {cargando == true && (
        <p>Cargando datos del servidor…</p>
      )}

      <p>Incidencias cargadas: {incidencias.length}</p>

      <div className="columnasIncidencias">
        {incidencias.map((incidencia) => {
          return (
            <CuadroIncidencia
              key={incidencia.id}
              titulo={incidencia.title}
              completada={incidencia.completed}
            >
            </CuadroIncidencia>
          )
        })}
      </div>
    </div>
  )
}

export default Incidencias