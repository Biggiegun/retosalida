import {getDocs, collection} from 'firebase/firestore'
import {db} from '../Firebase/firebaseConfig'

export const LoadTask = (id) => {
    const data = await getDocs(colelction(da, `${id}/task/Task`)) 
    const TaskList=[]
    
    data.forEach(hijo =>{
        // TaskList.push({})
    })
}
