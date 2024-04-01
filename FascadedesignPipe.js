import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Pipe1 from '../Pipe1.jpg'
import Pipe2 from '../Pipe2.jpg'
import { useNavigate } from 'react-router-dom'

function FascadedesignPipe() {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
    <div className='container mt-3 text-secondary'>
        <h1>Fascade Pipe Design</h1>

    </div>

    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={Pipe1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE PIPE DESIGN</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={Pipe2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>FASCADE PIPE DESIGN</p>
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

export default FascadedesignPipe