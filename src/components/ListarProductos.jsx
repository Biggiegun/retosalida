import React from 'react'
import { Table } from 'react-bootstrap'

export const ListarProductos = () => {
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
               
                </tbody>
            </Table>
            
        </div>
    )
}
