import React from 'react'
import Navbar from '../Website/navbar.jsx'
import Carousel from '../Website/carousel.jsx';

import { NavLink, } from "react-router-dom";

const website = () => {

  
    
  const scrolltop = () => {    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      
    });
  }
    
 
 

  return (
    <div>

      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width:30, height:30}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}





      
      <Navbar></Navbar>
      <Carousel></Carousel>
      

      



      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary">Our Services</h6>
            <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Solar Panels</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-2.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-wind fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Wind Turbines</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-3.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-lightbulb fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Hydropower Plants</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-4.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Solar Panels</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-5.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-wind fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Wind Turbines</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-6.jpg" alt="" />
                <div className="position-relative p-4 pt-0">
                  <div className="service-icon">
                    <i className="fa fa-lightbulb fa-3x"></i>
                  </div>
                  <h4 className="mb-3">Hydropower Plants</h4>
                  <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                  <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Why Choose Us!</h6>
                <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-lg-square bg-primary rounded-circle">
                        <i className="fa fa-check text-white"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-0">Quality</p>
                        <h5 className="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-lg-square bg-primary rounded-circle">
                        <i className="fa fa-user-check text-white"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-0">Expert</p>
                        <h5 className="mb-0">Workers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-lg-square bg-primary rounded-circle">
                        <i className="fa fa-drafting-compass text-white"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-0">Free</p>
                        <h5 className="mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-lg-square bg-primary rounded-circle">
                        <i className="fa fa-headphones text-white"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-0">Customer</p>
                        <h5 className="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{ objectFit: "cover" }} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxHeight: "600px" }}>
            <h6 className="text-primary">Our Projects</h6>
            <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
          </div>
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="mx-2 active" data-filter="*">All</li>
                <li className="mx-2" data-filter=".first">Solar Panels</li>
                <li className="mx-2" data-filter=".second">Wind Turbines</li>
                <li className="mx-2" data-filter=".third">Hydropower Plants</li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-6.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Solar Panels</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-5.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Wind Turbines</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item third">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-4.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Hydropower Plants</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-3.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Solar Panels</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-2.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Wind Turbines</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item third">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                <div className="portfolio-btn">
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                  <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-primary mb-0">Hydropower Plants</p>
                <hr className="text-primary w-25 my-2" />
                <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{ objectFit: "cover" }} alt="" />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Free Quote</h6>
                <h1 className="mb-4">Get A Free Quote</h1>
                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: "55px" }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0" style={{ height: "55px" }}>
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary">Team Member</h6>
            <h1 className="mb-4">Experienced Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                 
                </div>
                <div className="p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                  
                </div>
                <div className="p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                 
                </div>
                <div className="p-4">
                  <h5>Full Name</h5>
                  <span>Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h6 className="text-primary">Testimonial</h6>
            <h1 className="mb-4">What Our Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg" alt='' />
                <div className="btn-square bg-primary rounded-circle">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" alt='' />
                <div className="btn-square bg-primary rounded-circle">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg" alt='' />
                <div className="btn-square bg-primary rounded-circle">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Address</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-2">
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <NavLink className="btn btn-link" to="">About Us</NavLink>
              <NavLink className="btn btn-link" to="">Contact Us</NavLink>
              <NavLink className="btn btn-link" to="">Our Services</NavLink>
              <NavLink className="btn btn-link" to="">Terms & Condition</NavLink>
              <NavLink className="btn btn-link" to="">Support</NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Project Gallery</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-4.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-5.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" >
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <NavLink to="#">Your Site Name</NavLink>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">

                Designed By <NavLink to="https://htmlcodex.com">HTML Codex</NavLink>
                <br />Distributed By: <NavLink to="https://themewagon.com" target="_blank">ThemeWagon</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>


      <button  onClick={scrolltop}  className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></button>

    </div>
  )
}

export default website
