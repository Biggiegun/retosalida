import React from 'react'
import { Table } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {deleteAsincrono} from '../actions/actionProductos'

export const ListarProductos = ({handleEdit}) => {

    const {productos} = useSelector(store => store.productos)
    // console.log(productos)

    const dispatch = useDispatch()

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Fecha ingreso</th>
                        <th>Email</th>
                        <th>Github</th>
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
                                    <td>{item.cedula}</td>
                                    <td>{item.fecha}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.github}</td>
                                    <td><img src={item.imagen} alt="imagen" width="50px" height="50px"/></td>
                                    <td><button onClick={()=>handleEdit(item)}>Editar</button></td>
                                    <td><button onClick={()=>dispatch(deleteAsincrono(item.nombre))}>Eliminar</button></td>
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
