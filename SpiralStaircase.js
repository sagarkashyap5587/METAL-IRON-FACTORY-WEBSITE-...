import React from "react";
import Unique from '../Unique StairCaseDesign.jpg'
import Interior from '../Interior Design.jpg'
import Second from '../SecondStairs.jpg'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function SpiralStaircase(){
    const navigate = useNavigate()

    return(
        <>
        <Navbar/>
        <div className="container mt-3 text-secondary">
            <h3>Spiral StairCase</h3>
            <p>We are Introducing our Spiral Staircase is a stunning architectural masterpiece that combines form and function. Crafted with precision, this spiral staircase is designed to elevate the aesthetics of any space while providing practical access between floors.</p>
        </div>

        <div className='container-lg mt-3 text-center'>
            <div className='row'>
                <div className='col-lg-4'>
                <div className="card" style={{width:300, height:400}}>
                <img className="card-img-top" src={Second} alt="Card image" style={{width:300,height:400}}/>
                <div className="card-body">
                <p>Spiral StairCase</p>
                <p className="card-title">Wooden Stair design with Stylish Railing</p>
                <a href='#' className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-4'>
                <div className="card" style={{width:300, height:400}}>
                <img className="card-img-top" src={Interior} alt="Card image" style={{width:300,height:400}}/>
                <div className="card-body">
                <p>Spiral StairCase</p>
                <p className="card-title">Metal Spiral Stair Design</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>

        <div className='col-lg-4'>
                <div className="card" style={{width:300, height:400}}>
                <img className="card-img-top" src={Unique} alt="Card image" style={{width:300,height:400}}/>
                <div className="card-body">
                <p>Spiral StairCase</p>
                <p className="card-title">Modern Spiral Stair with Glass Railing</p>
                <a href="#" className="btn btn-primary" onClick={()=>navigate('/enquirenow')}>ENQUIRE NOW</a>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div className="container mt-3 text-secondary">
        <h2>Specification:</h2>
        <ul>
            <li><b>Material</b>- High-grade stainless steel finish</li>
            <li><b>Design</b>- Features a sleek and modern spiral design</li>
            <li><b>Step</b>- Expertly crafted wiht non-slip treads for</li>
            <li><b>Diameter</b>- Range from 3 feet to 10 feet</li>
            <li><b>Installation</b>- Easy to install</li>
            <li><b>Finish</b>- Customizable</li>
            <li><b>Railing</b>- Study railing system</li>
            <li><b>Weight Capacity</b>- To support substantial weight loads, ensuring long-lasting durability ideal for compact spaces</li>
        </ul> 
    </div>

    <div className="container mt-3 text-secondary">
        <p>Experience the seamless blend of functionality and style with our Spiral Staircase. Perfect for residential or commercial applications, it offers an eye-catching focal point while serving as a practical solution for multi-level connectivity. Upgrade your space today with this remarkable architectural marvel.</p>
    </div>


    <div className="container mt-3 text-secondary">
        <h3>Product Quality</h3>
        <p>The quality of a spiral staircase is determined by the materials used to construct it like wooden, glass, concrete & Steel the construction techniques used, and the overall design. High-quality spiral staircases are typically made of durable materials such as steel or wrought iron and feature strong, secure connections between the steps and supports.</p>
    </div>
    

    <Footer/>

        </>
    )

}

export default SpiralStaircase;