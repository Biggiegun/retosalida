import React from 'react'
import { useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import {listaProductos} from '../actions/actionProductos'

export const Principal = () => {
    const { productos } = useSelector(store => store.productos)
    const dispatch = useDispatch()
    //dispatch(listaProductos())

    return (
        <div>
            <h1>Hola estás en Principal!!!</h1>
            {
        (productos) ?
          (
            productos.map((item, index) => (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.nombre}</h5>
                      <p className="card-text">{item.descripcion}</p>
                      <p className="card-text"><small className="text-muted">{item.fecha}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            )
            )) :
          <p>Productos no disponibles</p>
      }
        </div>
    )
}
