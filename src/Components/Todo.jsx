import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTodo , deleteTodo } from '../Redux/Actions'
import Addtask from './Addtask'
import {MdFileDownloadDone , MdDeleteOutline} from 'react-icons/md'
const Todo = ({todo , index}) => {
    const dispatch = useDispatch()
    const handelDone = ()=>{
        dispatch(checkTodo({
            id: todo.id
        }))
    }

    const handelDelete = ()=>{
        dispatch(deleteTodo({
            id: todo.id
        }))
    }
  return (
    <div>
        <div key={todo.id} className="todo-field" style={{display:'flex',justifyContent:'space-around' , flexWrap:'wrap',width:'600px',backgroundColor:'#B0C4DE',textAlign:'center',margin:'auto',}}>
            <div>
                <h2 style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
                >{`${index+1}/- ${todo.description}`}</h2>
            </div>
            <div className='inputt-field'>

                <button className='check' onClick={handelDone}>
               <h3><MdFileDownloadDone/></h3> 
                </button>

                <button className='trash' onClick={handelDelete}>
                    <h3><MdDeleteOutline/></h3>
                </button>
                <Addtask todo={todo}/>
            </div>
        </div>
    </div>
  )
}

export default Todo