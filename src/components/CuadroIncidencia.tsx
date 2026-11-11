import '../styles/CuadroIncidencia.css'

interface DatosCuadroIncidencia {
  titulo: string
  completada: boolean
}

function CuadroIncidencia(props: DatosCuadroIncidencia) {
  let claseEstado: string = 'pendiente'
  let textoEstado: string = 'Pendiente'

  if (props.completada == true) {
    claseEstado = 'resuelta'
    textoEstado = 'Resuelta'
  }

  return (
    <div className={'CuadroIncidencia ' + claseEstado}>
      <h3>{props.titulo}</h3>
      <p>Estado: {textoEstado}</p>
    </div>
  )
}

export default CuadroIncidencia