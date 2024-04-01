import React from 'react'
import ZigZagStair1 from '../ZigZag1.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function ZigZagStair() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className='container mt-3 text-secondary'>
        <h3>ZigZag Staircase</h3>
        <p>ZigZag staircase, also known as swithback staircase, are a type of staircase that alternates between right and left turns as it rises.</p>
    </div>

    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-12'>
                <div className="card" style={{width:500, height:500}}>
                <img className="card-img-top" src={ZigZagStair1} alt="Card image" style={{width:500,height:500}}/>
                <div className="card-body">
                <p>ZIG ZAG</p>
                <p className="card-title">Zig Zag Metal Stairs</p>
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

export default ZigZagStair