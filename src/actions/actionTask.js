import {collection, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebase/firebaseConfig'
import {types} from '../types/types'

export const TaskNew = (task) =>{
    return async (dispatch, getSate) =>{
        const id = getSate().login.id

        const newTask = {
            url: task.url,
            nombre: task.nombre,
            description: task.description

        }

        await addDoc(collection(db, 'Task'), newTask)
        dispatch(addNewTask(newTask))
    }
}

export const addNewTask = (task) =>({
    type: types.taskAddNew,
    payload: {
        ...task
    }
})
