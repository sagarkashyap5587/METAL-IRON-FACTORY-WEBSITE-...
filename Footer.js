import React from 'react'
import Sagar from '../skimages.jpg'

function Footer() {
  return (
   <>
<footer className="text-center mt-5 text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Connected With Us On Social Networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="http://wa.me/918126583426" className="me-4 text-reset">
        <i className="fa fa-whatsapp"></i>
      </a>
      <a href="http://t.me/+918126583426" className="me-4 text-reset">
        <i className="fa fa-telegram"></i>
      </a>
      <a href="https://www.instagram.com/sagarkashyap9944" className="me-4 text-reset">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/sagar-529198250" className="me-4 text-reset">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="http://github.com/sagarkashyap5587" className="me-4 text-reset">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-lg-start">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem"></i>Website Owner
          </h6>
          <div className='container-lg text-center'>
            <div className='row'>
                <div className='col-lg-12'>
                <div className="card" style={{width:200, height:200}}>
                <img className="card-img-top" src={Sagar} alt="Card image" style={{width:200,height:200}}/>
                <div className="card-body">
                <p className='card-text'><b>SAGAR</b></p>
                <a href="#" className="btn btn-primary mt-4">ENQUIRE NOW</a>
                </div>
            </div>
        </div>
        </div>
        </div>

        </div>
   
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Stair Case</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Fascade Design</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Wall Partition</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Interior Architecture</a>
          </p>
        </div>
  
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Shopping Services</a>
          </p>
          <p>
            <a href="#!" className="text-reset">About</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Resources</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
  
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fa fa-home me-3"></i>South Delhi</p>
          <p>
            <i className="fa fa-envelope me-3"></i>
            skantal5587@gmail.com
          </p>
          <p><i className="fa fa-phone me-3"></i> +91-8126583426</p>
        </div>
   
      </div>

    </div>
  </section>
  <div className="text-center bg-light p-4">
    © 2023 Copyright:
  </div>

</footer>




   
   </>
  )
}

export default Footer