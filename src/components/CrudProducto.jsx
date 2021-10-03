import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {useForm} from '../hooks/useForm'
import { fileUpload } from '../helpers/fileUpload'
import { actionProductos, agregarProducto, listaProductos } from '../actions/actionProductos'
import { agregarAsincronico } from '../actions/actionProductos'
import { ListarProductos } from './ListarProductos'
import { activeProduct } from '../actions/actionProductos'
import {Edit} from '../actions/actionProductos'

export const CrudProducto = () => {
    const dispatch = useDispatch()

    const [values, handleInputChange, reset, setValues] = useForm({
        nombre:'',
        descripcion:'',
        fecha:'',
        imagen:''
    })

    let {nombre, descripcion, fecha, imagen} = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(agregarAsincronico(nombre, descripcion, fecha, imagen));
        reset();
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
   }
   const handleFileChanged = (e) => {
       const file = e.target.files[0];
       fileUpload(file)
       .then(response => {
           imagen = response
           console.log(response);
       })
       .catch(error => {
           console.log(error.message);
       })
   }

   useEffect(() => {
       dispatch(listaProductos());
   }, [])

    const [editForm, setEditForm] = useState(false)

    const handleEdit = (producto) =>{
        dispatch(activeProduct(producto.id, producto))
         setEditForm(true)
         setValues({
            ...producto
         })

    }

    const handlePut = (e) =>{
        e.preventDefault();
        dispatch(Edit(values))
        reset()
        setEditForm(false)
    }


    return (
        <div>
             <form>
                <h1>Productos</h1>
                <div className="form-group">
 
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="nombre" id="nombre" 
                        value={nombre}
                        onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion">Descrición</label>
                        <input className="form-control" type="text" name="descripcion" id="descripcion" 
                        value={descripcion}
                        onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="fecha">Fecha ingreso</label>
                        <input className="form-control" type="date" name="fecha" id="fecha" 
                        value={fecha}
                        onChange={handleInputChange}/>
                    </div>

                     <br/>
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn-warning my-2" type="button"
                        onClick={handlePictureClick}>Imagen</button>
                    </div>
 

                    <div>
                        {!editForm?
                        <button className="btn-warning my-2"
                        type="submit" onClick={handleRegistro}>Enviar</button>:
                        <button className="btn-warning my-2"
                        type="submit" onClick={handlePut}>Guardar</button>
                        }
                    </div>
 
                    <div>
                        <button className="btn-warning my-2"
                       type="button">Logout</button>
                    </div>
 
                </div>
            </form>
                <ListarProductos handleEdit = {handleEdit}/>
        </div>
    )
}
