import {types, typesProducto} from '../types/types'

const initialState ={
    productos: []
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
        default:
            return state;
    }
}
