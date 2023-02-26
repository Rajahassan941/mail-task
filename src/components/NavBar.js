import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
   <div className='main '>
    <Navbar  className='ms-4 d-flex '  >
        <Container >
          <Navbar.Brand  href="#home">
           <img
              alt=""
              src="https://www.pngfind.com/pngs/m/542-5421481_com-mail-icon-vector-png-transparent-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top img"
            />{' '}
         <Link to='/' className='link'> Mail</Link> 
          </Navbar.Brand>
          <div className=' ms-6' >
        <IoSettingsOutline width="20" height="30" className='icons'/>
        <AiOutlineQuestionCircle className='icons'/>
        <TbGridDots className='icons'/>
        </div>
        
       
        </Container>
        
        
        
      </Navbar>
      
     
   </div>
  )
}

export default NavBar