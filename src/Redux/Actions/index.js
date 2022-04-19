import { ADD_Todo, CHECK_Todo, DELETE_Todo,UPDATE_Todo} from "../Constantes/action-types"

export const addTodo=(payload)=>{
    return {
        type:ADD_Todo,
        payload
    }
}

export const checkTodo=(payload)=>{
    return {
        type:CHECK_Todo,
        payload
    }
}
export const deleteTodo=(payload)=>{
    return {
        type:DELETE_Todo,
        payload
    }
}

export const updateTodo=(payload)=>{
    return {
        type:UPDATE_Todo,
        payload
    }
}