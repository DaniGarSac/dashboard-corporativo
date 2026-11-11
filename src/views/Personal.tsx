import { useState } from 'react'
import CuadroEmpleado from '../components/CuadroEmpleado'
import '../styles/Personal.css'


function Personal() {

    interface Empleado {
        id: number
        name: string
        email: string
        address: {
            city: string
        }
    }

    const [empleados, setEmpleados] = useState<Empleado[]>([])
    const [cargando, setCargando] = useState<boolean>(false)
    const [busqueda, setBusqueda] = useState<string>('')
    
    async function cargarPersonal() {

        setCargando(true)

        const listaEmpleados: Empleado[] = []
        
        let datos: Empleado[] = []

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')

            if (!res.ok) {
                throw new Error('Error al consultar la API')
            }

            datos = await res.json()

            for (let i = 0; i < datos.length; i++) {

                const empleadoConsulta: Empleado = {
                    id: datos[i].id,
                    name: datos[i].name,
                    email: datos[i].email,
                    address: {
                        city: datos[i].address.city
                    }
                }

                listaEmpleados[i] = empleadoConsulta
            }

            setEmpleados(listaEmpleados)

        } catch (e) {

            console.log(`Error en el fetch: ${e}`)

        } finally {

            setCargando(false)
            
        }
   
    }

    const empleadosFiltrados = empleados.filter((empleado) => {
        const nombre = empleado.name.toLowerCase()
        const textoBuscado = busqueda.toLowerCase()

        return nombre.includes(textoBuscado)

    })

    return (
        <div>
            <h2>Personal</h2>

            <button onClick={cargarPersonal} disabled = {cargando}>
                Cargar personal
            </button>

            {cargando == true && <p>Cargando datos del servidor…</p>}
            
            <p>Empleados cargados: {empleados.length}</p>

            <input
                className="buscadorPersonal"
                type="text"
                placeholder="Buscar empleado por nombre"
                value={busqueda}
                onChange={(evento) => {
                    setBusqueda(evento.target.value)
                }}
                >
            </input>

            <div className='ColumnaEmpleados'>
                {empleadosFiltrados.map(function (empleado) {
                    return (
                        <CuadroEmpleado
                            key={empleado.id}
                            nombre={empleado.name}
                            correo={empleado.email}
                            ciudad={empleado.address.city}>
                        </CuadroEmpleado>
                    )
                })}
            </div>
        </div>
    )
}

export default Personal