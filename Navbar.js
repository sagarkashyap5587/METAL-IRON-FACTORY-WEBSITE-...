import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"


function Navbar() {
    const navigate = useNavigate();
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');

    function myfunc(e){
      e.preventDefault()
      console.log(email)
      console.log(password)
    }



    return (
     <>
     <nav className="navbar navbar-expand-sm bg-light navbar-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand text-warning" href="#">Metal & Iron Factory</a>
      <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button> &nbsp;&nbsp;&nbsp;
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <a href='#' onClick={()=>navigate('/')}><i className='fa fa-home text-secondary'></i></a>&nbsp;&nbsp;&nbsp;
 
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">STAIR CASE</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/spiralstaircase')}>Spiral Staircase</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/straightstair')}>Straight Staircase</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/helicalstair')}>Helical</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/zigzag')}>Zig Zag</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/modernstair')}>Modern</a></li>
            </ul>
          </li>&nbsp;&nbsp;&nbsp;
  
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">FASCADE DESIGN</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/block')}>Blocks</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/pipe')}>Pipe</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/fascadehomedesign')}>Home Cover</a></li>
            </ul>
          </li>&nbsp;&nbsp;&nbsp;
  
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">WALL PARTITION</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/solidbar')}>Solid Bar</a></li>
              <li><a className="dropdown-item" href="#" onClick={()=>navigate('/walldesign')}>Design</a></li>
            </ul>
          </li>&nbsp;&nbsp;&nbsp;
  
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">ROOF STRUCTURE</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={()=>navigate("/pergola")}>Pergola</a></li>
            </ul>
          </li> &nbsp;&nbsp;&nbsp;
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search" style={{width:280}}/>
        </form> &nbsp; &nbsp;
        <ul className='navbar-nav navbar-end'>
          <li><a href='#'data-bs-toggle='modal' data-bs-target='#Login' className='text-secondary' style={{textDecoration:'None'}}>Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div className='container mt-3'>
      <div className='col-lg-12'>
        <div className='modal'id='Login'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3>Login</h3>
                <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
              </div>
              <div className='modal-body'>
              <form onSubmit={myfunc}>
              <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" name="email" onChange={(e)=>setemail(e.target.value)}/>
                  <span className="input-group-text">@gmail.com</span>
                </div>
  
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Your Password" name="password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <br/><br/>

   </>
  )
}

export default Navbar