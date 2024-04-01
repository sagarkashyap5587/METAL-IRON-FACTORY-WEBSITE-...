import React from 'react'
import Modern1 from '../Modern1.jpg'
import Modern2 from '../modern2.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
function Modern() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className='container mt-3 text-secondary'>
        <h3>Modern Staircase</h3>
        <p>A modern staircase refers to a type of staircase design that is characterized by clean lines, simplicity, and a minimalistic approach. In modern staircase design, the focus is on creating a sleek and visually appealing staircase that is both functional and stylish.</p>
    </div>

    
    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={Modern1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>MODERN STAIRCASE</p>
                <p className="card-title">Modern Stair with Stylish Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={Modern2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>MODERN STAIRCASE</p>
                <p className="card-title">Modern Stair with Stylish Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>

        <Footer/>
    
    </>
  )
}

export default Modern