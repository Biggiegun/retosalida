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
        cedula:'',
        fecha:'',
        correo: '',
        github:'',
        imagen:''
    })

    let {nombre, cedula, fecha, correo, github, imagen} = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(agregarAsincronico(nombre, cedula, fecha, correo, github, imagen));
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

   /*useEffect(() => {
       dispatch(listaProductos());
   }, [])*/

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
                <h1>Gestión candidatos</h1>
                <div className="form-group">
 
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="nombre" id="nombre" 
                        value={nombre}
                        onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion">Cédula</label>
                        <input className="form-control" type="text" name="cedula" id="cedula" 
                        value={cedula}
                        onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="fecha">Fecha Nacimiento</label>
                        <input className="form-control" type="date" name="fecha" id="fecha" 
                        value={fecha}
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="fecha">Email</label>
                        <input className="form-control" type="email" name="correo" id="correo" 
                        value={correo}
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="fecha">Usuario Github</label>
                        <input className="form-control" type="text" name="github" id="github" 
                        value={github}
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

                        <button className="btn-dark my-2" type="button"
                        onClick={handlePictureClick}>Imagen</button>
                    </div>
 

                    <div>
                        {!editForm?
                        <button className="btn-dark my-2"
                        type="submit" onClick={handleRegistro}>Enviar</button>:
                        <button className="btn-dark my-2"
                        type="submit" onClick={handlePut}>Guardar</button>
                        }
                    </div>
 
                    <div>
                        <button className="btn-dark my-2"
                       type="button">Logout</button>
                    </div>
 
                </div>
            </form>
                <ListarProductos handleEdit = {handleEdit}/>
        </div>
    )
}
