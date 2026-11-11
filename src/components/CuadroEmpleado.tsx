import '../styles/CuadroEmpleado.css'

interface DatosCuadroEmpleado {
  nombre: string,
  correo: string,
  ciudad: string
}

function CuadroEmpleado(props: DatosCuadroEmpleado) {
  return (
    <div className="CuadroEmpleado">
      <h3>{props.nombre}</h3>
      <p>Correo: {props.correo}</p>
      <p>Ciudad: {props.ciudad}</p>
    </div>
  )
}

export default CuadroEmpleado