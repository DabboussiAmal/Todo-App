

import { ADD_Todo, CHECK_Todo, DELETE_Todo, UPDATE_Todo } from "../Constantes/action-types";
import {v4 as uuidv4 } from 'uuid'

const initialState={
    todos:[]
}


function todosReducer (state=initialState,action){
    const {type ,payload} = action
    switch(type) {
        case ADD_Todo:
        return {
            todos: [...state.todos,{id:uuidv4(), isDone:false, description:payload.description}]
        };

        case CHECK_Todo:
        return {
            todos: state.todos.map((todo)=>todo.id === payload.id
            ? {...todo, isDone : !todo.isDone} : todo)
            
        };
        case DELETE_Todo:
        return {
            todos: state.todos.filter(todo=>todo.id !== payload.id)
        };

        case UPDATE_Todo:
        return {
            todos: state.todos.map((todo)=> todo.id === payload.id
            ? {...todo , description:payload.description}:todo)
        };

        
    
        default:
           return  state;
    }

    
}

export default todosReducer
