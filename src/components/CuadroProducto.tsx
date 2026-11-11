import '../styles/CuadroProductos.css'

interface DatosCuadroProducto {
  nombre: string
  precio: number
  imagen: string
}

function CuadroProducto(props: DatosCuadroProducto) {
  return (
    <div className="CuadroProducto">
      <img src={props.imagen} alt={props.nombre} />

      <h3>{props.nombre}</h3>

      <p>Precio: {props.precio} $</p>

      {props.precio > 50 && (
        <p className="altoValor">Activo de Alto Valor</p>
      )}
    </div>
  )
}

export default CuadroProducto