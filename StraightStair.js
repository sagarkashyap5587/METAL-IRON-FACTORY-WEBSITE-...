import React from "react";
import StraightStairCase from '../StraightStairCase.jpg'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function StraightStair(){
    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
        <div className="container mt-3 text-secondary">
            <h3>Stright Staircase</h3>
            <p>We are Introducing Straight Staircase, a versatile and roubust solution for seamless vertical connectivity. Crafted with precision, this staircase combines durability and elegance.</p>
            </div>

            <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-12'>
                <div className="card" style={{width:500, height:500}}>
                <img className="card-img-top" src={StraightStairCase} alt="Card image" style={{width:500,height:500}}/>
                <div className="card-body">
                <p>STRAIGHT STAIRCASE</p>
                <p className="card-title">Wooden Stair design with Stylish Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>

    <div className="container mt-3 text-secondary">
        <h3>About the Product</h3>
        <p>Straight staircases are the most efficient and the simplest to construct, as they have fewer parts than other designs. They are also less prone to accidents due to their straightforward design, as there are no turns or landings that could catch someone’s foot.
Additionally, straight staircases are space-saving and can be installed in places where space is limited. They are also usually the most cost-effective choice.</p>
    </div>
    
    <Footer/>

        </>
    )
}

export default StraightStair;