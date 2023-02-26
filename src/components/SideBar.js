import React from 'react'
import './SideBar.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'

import { Link } from 'react-router-dom';
import {HiPencil } from 'react-icons/hi';
import {BiSend } from 'react-icons/bi';
import {RiDraftLine } from 'react-icons/ri';


function SideBar() {

    // const[email,setEmail]=useState('');
    // const[sub,setSub]=useState('');
    // const[content,setContent]=useState('');
    // const[flag,setFlag]=useState(false);


    // function sentmail(e){
    //   e.preventDefault()
    //   if(!email){
    //     setFlag(true)
    //   }else{
    //     setFlag(false)
    //     localStorage.setItem("email",JSON.stringify(email))
    //     localStorage.setItem("sub",JSON.stringify(sub))
    //     localStorage.setItem("content",JSON.stringify(content))
    //     console.log(email,su);

    //   }

    // }


    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    <div className='head'>
        <button > <HiPencil/> <Link to='/' className='link'>compose mail </Link> </button>


        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={sentmail} >
                <input type="email" placeholder='to:'
                onChange={(event)=>setEmail(event.target.value)} />
                <br />
                <input type="text" placeholder='sub'
                onChange={(event)=>setSub(event.target.value)} />
                <br />
                <input className='content' type="text" placeholder='content'
                onChange={(event)=>setContent(event.target.value)} />
                <br />
        
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Send
          </Button>
        </Modal.Footer>
      </Modal>
      {flag&&(
        <Alert color='primary' variant='danger'>Please fill reciepient mail</Alert>
      )} */}

   
            <ul className='an'>
                <Link to='/sent' className='link'> <BiSend className='me-2 mb-1'/>Sent</Link>
            </ul>
            <ul className='an'>
            <Link to='/drafts' className='link'><RiDraftLine className='me-2 mb-1'/>Drafts</Link>
            </ul>
            
        


    </div>
  )
}

export default SideBar