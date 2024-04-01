import React, { useEffect, useState } from 'react'
import "./All.css"
import Firstly from '../FirstStairs.jpg'
import Second from '../SecondStairs.jpg'
import Third from '../Third.jpg'
import Fourth from '../FourthStairs.jpg'
import Steel from '../Steel.jpg'
import GlassStairCase1 from '../GlassStairCaseDesign.jpg'
import GlassStairCase2 from '../GlassStairCase2.jpg'
import Modern from '../ModernStairCase.jpg'
import Wooden from '../WoodenStairCaseDesign.jpg'
import ZigZag from '../ZigZagStairCase.jpg'
import Unique from '../Unique StairCaseDesign.jpg'
import Interior from '../Interior Design.jpg'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'



function First() {


  const navigate = useNavigate();




  return (
   <>
   <div style={{height:2200, padding:0, margin:0,}}>
    <Navbar/>
  
<div className='container-fluid'>
<div id="demo" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Firstly} alt="Los Angeles" className="d-block" style={{width:1300, height:425}}/>
      <div className="carousel-caption">
        <h3>Elevate Your Home With Our Stairs</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Second} alt="Chicago" className="d-block"style={{width:1300, height:400}}/>
      <div className="carousel-caption">
        <h3>Stairs That Support Your Style and Safety</h3>
      </div> 
    </div>
    <div className="carousel-item">
      <img src={Third} alt="New York" className="d-block" style={{width:1300,height:400}}/>
      <div className="carousel-caption">
        <h3>INDIA</h3>
      </div>  
    </div>

    <div className="carousel-item">
      <img src={Fourth} alt="New York" className="d-block" style={{width:1300,height:400}}/>
      <div className="carousel-caption">
        <h3>Unleash The Beauty Of Your Home With Our Stairs </h3>
      </div>  
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
</div>





<div className='container-lg mt-3 text-center'>
  <div className='row'>
    <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400,}}>
    <img className="card-img-top" src={Steel} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Steel Staircase</h4>
      <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>


  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={GlassStairCase1} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Glass Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={GlassStairCase2} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Glass Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>
</div>
</div>




<div className='container-lg mt-3 text-center'>
  <div className='row'>
    <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={Modern} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Modern Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={Wooden} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Wooden Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={ZigZag} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">ZigZag Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>
</div>
</div>

<div className='container mt-3 text-center text-secondary'>
  <h2>Explore Unique Collection</h2>
</div>

<div className='container-lg mt-3 text-center'>
  <div className='row'>
    <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={Unique} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Unique Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={Interior} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Interior Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>

  <div className='col-lg-4'>
    <div className="card" style={{width:300, height:400}}>
    <img className="card-img-top" src={Second} alt="Card image" style={{width:300,height:400}}/>
    <div className="card-body">
      <h4 className="card-title">Wooden Staircase</h4>
      <a href="#" className="btn btn-primary"onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
    </div>
    </div>
  </div>
</div>
</div>

<Footer/>

</div>
   </>
  )
}

export default First
