import React from 'react'
import FascadeHome1 from '../FascadeHome1.jpg'
import FascadeHome2 from '../FascadeHome2.jpg'
import FascadeHome3 from '../FascadeHome3.jpg'
import FascadeHome4 from '../FascadeHome4.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function FascadedesignHome() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar/>

    <div className='container mt-3 text-secondary'>
        <h1>Fascade Home Design</h1>
    </div>

    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={FascadeHome1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE HOME DESIGN</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={FascadeHome2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE HOME DESIGN</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>

        <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={FascadeHome3} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE HOME DESIGN</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={FascadeHome4} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE HOME DESIGN</p>
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

export default FascadedesignHome