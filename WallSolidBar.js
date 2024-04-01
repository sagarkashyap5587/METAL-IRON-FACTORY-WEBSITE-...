import React from 'react'
import solidbar1 from '../WallSolid1.jpg'
import solidbar2 from '../WallSolid2.jpg'
import solidbar3 from '../WallSolid3.jpg'
import solidbar4 from '../WallSolid4.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function WallSolidBar(){
    const navigate = useNavigate();

    return(

        <>
        <Navbar/>

<div className='container mt-3 text-secondary'>
        <h3>SOLID BAR</h3>
        
    </div>

    
    <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={solidbar1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>SOLID BAR</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={solidbar2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>SOLID BAR</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>

    
    <div className='container-lg mt-5 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={solidbar3} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>SOLID BAR</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={solidbar4} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>SOLID BAR</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>

        <Footer/>
        
        </>
    )
}

export default WallSolidBar