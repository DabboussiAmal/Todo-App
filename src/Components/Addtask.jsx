import React, {useState} from 'react';
import { Button, Modal } from "react-bootstrap";
import {FaEdit} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../Redux/Actions';

const Addtask = ({todo}) => {
  
    const [show, setShow] = useState(false);
    const [updatedText , setUpdatedText] = useState({})
    const handleChange=e=>{
      setUpdatedText(e.target.value)
    }
    const handleSubmit=()=>{
      dispatch(updateTodo({
        id:todo.id , description:updatedText
      }))
      handleClose()
    }
    const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <h3> <FaEdit /> </h3>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Todo ...</Modal.Title>
          </Modal.Header>
          
          <input 
          type="text"
          onChange={handleChange}
          defaultValue={todo.description}
          />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 


export default Addtask