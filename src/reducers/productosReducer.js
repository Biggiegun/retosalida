import {types, typesProducto} from '../types/types'

const initialState ={
    productos: [],
    editProducto:{
        nombre:"",
        descripcion:"",
        fecha:"",
        imagen:""
    }
}

export const productosReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case typesProducto.registro:
            return {
                productos: [action.payload]
            }
        case typesProducto.lista:
            return{
                productos: [...action.payload]
            }
        case typesProducto.delete:
            return{
                   productos:  state.productos.filter(item => item.nombre !== action.payload)
            }
        case typesProducto.active:
            return{
                ...state,
                editProducto: action.payload
            }
        default:
            return state;
    }
}
