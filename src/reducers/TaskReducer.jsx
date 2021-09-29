import { types } from '../types/types';

const initiaState = {
    task:[],
    active: {
        id: '',
        url: '',
        nombre: '',
        description: ''
    }
}

export const TaskReducer = (state = initiaState, action) => {
   switch (action.type) {
       case types.taskAddNew:
          return{
              ...state,
              task:[...action.payload, ...state.task]
          }
          case types.taskLoad:
            return{
                ...state,
                task:[...action.payload]
            }   
       default:
           return state;
   }
}
