import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Compose.css";
import Form from "react-bootstrap/Form";

function Compose() {


  
  const [mail, setMail] = useState([]);
  const [mailStatus,setMailStatus]=useState(false)
  const [to, setTo] = useState("");
  const [sub, setSub] = useState("");
  const [content, setContent] = useState("");


  

 



  function handleToChange(e){
    setTo(e.target.value)
  }
  function handleSubChange(e){
    setSub(e.target.value)
  }
  function handleContentChange(e){
    setContent(e.target.value)
  }

  function handleMessages(e){
    e.preventDefault()


  //  if(window.confirm("sent message?")==true){
  //   setMailStatus(true)
  //  }else{
  //   setMailStatus(false)
  //  }


    let mails={
      to,
      sub,
      content,
      mailStatus
    }
    setMail([...mail,mails])
    setTo('')
    setSub('')
    setContent('')
    
    
  }
  useEffect(()=>{
      localStorage.setItem('mail',JSON.stringify(mail))
  },[mail])

  return (
    <div className="main">
      <div className="child1">
        <SideBar />
      </div>
      <div className="child2">
        <h4 className="text-center mt-3" variant="primary">
          New message
        </h4>
        <Form 
        onSubmit={handleMessages}
        className="mt-5 ms-4 p-4 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>To:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control form-control-sm"
              value={to}
              onChange={handleToChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="subject"
              className="form-control form-control-sm"
              value={sub}
              onChange={handleSubChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3  " controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              placeholder="content"
              className="form-control form-control-lg"
              value={content}
              onChange={handleContentChange}
              required
            />
          </Form.Group>

          <div className="ms-4">
          <Button variant="primary"  type="submit" >
        Sent 
      </Button>

      
     
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Compose;
