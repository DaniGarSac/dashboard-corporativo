import { useState } from 'react'
import CuadroProducto from '../components/CuadroProducto'
import '../styles/Inventario.css'

interface Producto {
  id: number
  title: string
  price: number
  image: string
}

function Inventario() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState<boolean>(false)

  async function cargarInventario() {
    setCargando(true)

    const listaProductos: Producto[] = []
    let datos: Producto[] = []

    try {
      const res = await fetch(
        'https://fakestoreapi.com/products?limit=6'
      )

      if (!res.ok) {
        throw new Error('Error al consultar la API')
      }

      datos = await res.json()

      for (let i = 0; i < datos.length; i++) {
        const productoConsulta: Producto = {
          id: datos[i].id,
          title: datos[i].title,
          price: datos[i].price,
          image: datos[i].image
        }

        listaProductos[i] = productoConsulta
      }

      setProductos(listaProductos)
    } catch (e) {
      console.log(`Error en el fetch: ${e}`)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div>
      <h2>Inventario</h2>

      <button onClick={cargarInventario} disabled={cargando}>
        Cargar inventario
      </button>

      {cargando == true && (
        <p>Cargando datos del servidor…</p>
      )}

      <p>Productos cargados: {productos.length}</p>

      <div className="columnasProductos">
        {productos.map((producto) => {
          return (
            <CuadroProducto
              key={producto.id}
              nombre={producto.title}
              precio={producto.price}
              imagen={producto.image}
            >
            </CuadroProducto>
          )
        })}
      </div>
    </div>
  )
}

export default Inventario