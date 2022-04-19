import React from 'react'
import {FcTodoList} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../Redux/Actions'
const Task = ({todo , index }) => {
    const [textInput , setTextInput] = useState('')
    const dispatch =useDispatch()
    const onChange=e=>{
        setTextInput(e.target.value)
    }
    const handleClick=e=>{
        e.preventDefault()
        dispatch(addTodo({
            description :textInput
        }))
        
        setTextInput('')
    }
  return (
      
    <div style={{width:'600px',backgroundColor:'#B0C4DE',textAlign:'center',margin:'auto',marginTop:'50px'}} >

       <div style={{display:'flex' , justifyContent:'center'}} >
       <h1 style={{ fontSize:'60px'}}> <FcTodoList/></h1>
       <h1 style={{marginTop:'50px'}}>My Todo List</h1>
       </div>

        <form action="">
            <input type="text" 
            placeholder='Enter a todo ...'
            onChange={onChange}
            value={textInput} style={{width:'200px',}} />
            <button onClick ={handleClick} style={{backgroundColor:'#87CEFA'}}>Add</button>
        </form>
    </div>
  )
}

export default Task