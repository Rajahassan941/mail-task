import React, { useState } from 'react'
import SideBar from '../components/SideBar'
// import View from './View'

function Sent() {
  

  const getData=()=>{
    const data=localStorage.getItem('mail')
    if (data){
      return JSON.parse(data);
    }
    else{
      return []
      
    }
  }
  const [mails,setMails]=useState(getData())
  

  
  return (
   <div className='main'>
    <div className='child1'>
    <SideBar/>
    </div>
    <div className='child2'>
      <div className="con mt-4 ms-5 mb-3">
      <h1 className='text-center mb-5 text-decoration-underline'>Sent Messages</h1>
      
        {mails.length<1 && <div><h1 className='fw-light text-center mt-5'>No messages to show</h1></div>}
        {mails.length>0&& mails.map(items=>(<div key={items.sub ,items.content}>
          <h3>{items.sub}</h3>
          <p className='mb-2 fw-light'>To:{items.to}</p>
          <br />
          <p>{items.content}</p>

          <br />
          <hr />

        
        
        
        </div>
        ) 
          
        ) }
        
      </div>
      
     

    </div>

   </div>
  )
}

export default Sent