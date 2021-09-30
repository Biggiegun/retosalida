import { typesProducto } from "../types/types"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const agregarAsincronico = (
  nombre,
  descripcion,
  fecha,
  imagen
) => {
  return (dispatch) => {
    const producto = {
     
      nombre,
      descripcion,
      fecha,
      imagen,
    };

    // Agregar productos!!!
    // Recibe "3" parámetros; colección a afectar, parámetros y el objeto.
    addDoc(collection(db, "Productos"), producto)
      .then((resp) => {
        dispatch(agregarProducto(producto));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const agregarProducto = (producto) => {
  return {
    type: typesProducto.registro,
    payload: producto,
  };
};

// Consultar Productos


export const listaProductos = () =>{
  return async (dispatch) =>{
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const producto = [];
    querySnapshot.forEach((doc)=>{
      producto.push({
        ...doc.data()
      })
    });
    dispatch(lista(producto));
  }
}


export const lista = (producto) =>{
  return {
      type: typesProducto.lista,
      payload: producto
  }
}