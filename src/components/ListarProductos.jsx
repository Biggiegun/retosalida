import React from 'react'
import { Table } from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const ListarProductos = () => {

    const {productos} = useSelector(store => store.productos)
    // console.log(productos)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha ingreso</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (productos) ?
                            (
                                productos.map((item, index)=>(
                                    <tr key={index}>
                                    <td>{item.nombre}</td>
                                    <td>{item.descripcion}</td>
                                    <td>{item.fecha}</td>
                                    <td><img src={item.imagen} alt="imagen producto" width="50px" height="50px"/></td>
                                    </tr>
                                ))
                            ):
                            <p>Productos no disponibles!!</p>
                    }
                </tbody>
            </Table>
            
        </div>
    )
}
