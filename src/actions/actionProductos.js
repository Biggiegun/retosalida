import { typesProducto } from "../types/types"
import { addDoc, collection, getDocs, deleteDoc, query, where, doc, updateDoc } from "firebase/firestore";
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

// Eliminar 

export const deleteAsincrono = (nombre) =>{
  return async(dispatch) => {

      const prodCollection = collection(db,"Productos");
      const q = query(prodCollection,where("nombre","==",nombre))
     
      const datos = await getDocs(q);
      datos.forEach((docu) => {
          deleteDoc(doc(db,"Productos",docu.id));
      })
      dispatch(eliminar(nombre));
  }
}

export const eliminar = (nombre) =>{
  return{
    type: typesProducto.delete,
    payload: nombre
  }
}

// Active & edit

export const activeProduct = (id, producto) =>{
  return{
    type: typesProducto.active,
    payload: {
      id,
      ...producto
    }
  }
}

export const Edit = (producto) =>{
  return async (dispatch) =>{
    const prodCollection = collection(db, "Productos");
    const q = query(prodCollection, where("nombre","==", producto.nombre))
    const datos = await getDocs(q);
    datos.forEach((docu)=>{
      updateDoc(doc(db, "Productos", docu.id),{
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        fecha: producto.fecha,
        imagen: producto.imagen
      })
    })
  }
}