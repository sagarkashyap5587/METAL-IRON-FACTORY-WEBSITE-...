import React from "react";
import HelicalStaircase2 from '../HelicalModernStairCase2.jpg'
import Interior1 from '../Interior Design.jpg'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function HelicalStaircase(){
    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
        <div className="container mt-3 text-secondary">
            <h3>Helical Staircase</h3>
            <p>We are Introducing our Helical Staircase, an architectural marvel that combines elegance and functionality. Crafted with meticulous attention to detail, this staircase is a true statement piece</p>
        </div>

        <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={Interior1} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>HELICAL STAIRCASE</p>
                <p className="card-title">Modern Stair with Stylish Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-6'>
                <div className="card" style={{width:450, height:450}}>
                <img className="card-img-top" src={HelicalStaircase2} alt="Card image" style={{width:450,height:450}}/>
                <div className="card-body">
                <p>HELICAL STAIRCASE</p>
                <p className="card-title">Modern Stair with Stylish Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>

    <div className="container mt-3 text-secondary">
        <h3>Technical Details:</h3>
        <ul>
            <li><b>Material</b>- High-grade stainless steel finish</li>
            <li><b>Design</b>- Features a sleek and modern spiral design</li>
            <li><b>Step</b>- Expertly crafted with non-slip treads for</li>
            <li><b>Diameter</b>- Ranging from 3 feet to 10 feet</li>
            <li><b>Finish</b>- Customizable</li>
            <li><b>Railing</b>- Sturdy railing system</li>
            <li><b>Weight Capacity</b>- To support substantial weight loads, ensuring long-lasting durability Ideal for compact spaces</li>   
        </ul>

            <p>Experience the epitome of architectural brilliance with our Helical Staircase. Combining form and function, it serves as a breathtaking centerpiece while seamlessly connecting different levels. Its unique design is both visually appealing and structurally sound, making it the perfect addition to any home. Crafted from high-quality materials, it ensures maximum durability and stability.
            </p>
            <p>Its modern aesthetic and timeless beauty make it a piece you’ll treasure for years to come. Elevate your space to new heights with this exquisite staircase that embodies timeless elegance.</p>
    </div>

    <Footer/>

        
        </>
    )
}
export default HelicalStaircase;