import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';


function EnquireNow() {
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[product,setproduct]=useState('');
  const[length,setlength]=useState('');
  const[breadth,setbreadth]=useState('');
  const[height,setheight]=useState('');
  const[remarks,setremarks]=useState('');
  // const[all,setall]=useState('')

 

  
  function myfunc(){
    console.log("My name is "+ name)
    console.log(email)
    console.log(phone)
    console.log(product)
    console.log(length)
    console.log(breadth)
    console.log(height)
    console.log(remarks)

    axios.post('http://localhost:8000/api2/create/', {
      name: name,
      email:email,
      phone:phone,
      product:product,
      length:length,
      breadth:breadth,
      height:height,
      remarks:remarks
    });
    window.location.reload()
   

  
  }

    
  

   
    
    
    
  




  return (
   <>
<Navbar/>
   <div style={{height:600}}>
   <form>
<div className='container mt-3 border text-secondary'>
    <h1 className='text-center text-secondary'>CUSTOM REQUIREMENT</h1>
  <div className="row">
    <div className="col">
        <label>Your Name</label>
      <input type="text" className="form-control" placeholder="Enter Name" name="Name" onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div className="col">
        <label>Your Email</label>
      <input type="email" className="form-control" placeholder="Enter Email" name="Email" onChange={(e)=>setemail(e.target.value)}/>
    </div>
  </div>
  <div className='row mt-3'>
    <div className='col'>
        <label>Your Phone</label>
        <input type='text'className='form-control' placeholder='Enter Phone'name="Phone" onChange={(e)=>setphone(e.target.value)}/>
    </div>
    <div className='col'>
        <label>Requirement Product</label>
        <input type='text'className='form-control' placeholder='Enter Requirement Product'name="Product" onChange={(e)=>setproduct(e.target.value)}/>
    </div>
  </div>

  <div className='row mt-3'>
    <div className='col'>
        <label>Product Dimension</label>
        <input type='text'className='form-control' placeholder='Enter Lenght'name="Length" onChange={(e)=>setlength(e.target.value)}/><br/>
        <input type='text'className='form-control' placeholder='Enter Breadth'name="Breadth" onChange={(e)=>setbreadth(e.target.value)}/><br/>
        <input type='text'className='form-control' placeholder='Enter Height'name="Height" onChange={(e)=>setheight(e.target.value)}/><br/>
    </div>
    <div className='col'>
    <form>
    <div className="mb-3 mt-1">
      <label for="Remarks">Remarks:</label>
      <textarea className="form-control" rows="6" id="Remarks" name="text" onChange={(e)=>setremarks(e.target.value)}></textarea>
    </div>
  </form>
    </div>
  </div>
  
  </div>
  
</form>
<div className='container mt-1'>
  <div className='row'>
  <div className='col-lg-12'>
    <center>
  <button type='button' className='btn btn-primary mt-5 btn-center' onClick={()=>myfunc()}>Submit</button></center>
  </div>
  </div>
</div>


<Footer/>
</div>
   </>
  )
}

export default EnquireNow