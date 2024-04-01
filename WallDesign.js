import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WallDesign1 from '../WallDesign1.jpg'
import WallDesign2 from '../WallDesign2.jpg'
import { useNavigate } from 'react-router-dom'

function WallDesign() {
  const navigate = useNavigate();
  return (
    <>
    
    <Navbar/>
    
<div className='container mt-3 text-secondary'>
        <h3>Wall Partition Design</h3>
        
    </div>

    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={WallDesign1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>WALL DESIGN</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={WallDesign2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>WALL DESIGN</p>
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

export default WallDesign