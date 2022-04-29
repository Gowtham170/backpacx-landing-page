import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/bacpacx-full-Logo.png';

//ps-5 ps-sm-0
const Footer = () => {
  return (
      <div className='container-lg'>
          <div className='row justify-content-start align-items-start'>
              <div className='col-md-4 col-lg-4 my-4 text-center mt-5 mb-2'>
                  <div className='text-center'>
                      <h4 className='mb-2'>
                          <img src={logo} alt='logo_img' className='rounded me-2 float-center mb-1' style={{ height: '25px', width: '25px' }} />
                          BACPACX
                      </h4>
                      <hr style={{ width: "170px", margin: "auto" }} />
                      <p className='mt-2 fs-5'>You of tomorrow</p>
                  </div>
              </div>
              <div className='col-md-5 col-lg-6 my-4 text-center'>
                  <div className='row'>
                    <div className='col-6 col-md-10 mt-3'>
                          <nav className='navbar-expand-md justify-content-end align-items-center ms-lg-5 ps-lg-2 ms-md-0 ps-md-0 ms-sm-5 ps-sm-5'>
                              <ul className='navbar-nav'>
                                  <li className='navbar-item'>
                                      <Link to="/" aria-current="page" className="nav-link text-dark me-lg-3">Home</Link>
                                  </li>
                                  <li className='navbar-item'>
                                      <Link to="/OurVision" className="nav-link text-dark me-lg-3 ms-2 ms-md-0">Careers</Link>
                                  </li>
                                  <li className='navbar-item'>
                                      <Link to="/Investors" className="nav-link text-dark me-lg-3 ms-3 ms-md-0">Investors</Link>
                                  </li>
                                  <li className='navbar-item'>
                                      <Link to="/FAQ" className="nav-link text-dark me-lg-3 ms-3 ms-md-0">Investors</Link>
                                  </li>
                                  <li className='navbar-item'>
                                      <Link to="/" className="nav-link text-dark">Privacy</Link>
                                  </li>
                                  <li className='navbar-item'>
                                      <Link to="/" className="nav-link text-dark me-sm-2">Terms</Link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                      <div className='col-6 col-md-10 mt-4 mt-md-3'>
                          <nav className='navbar-expand-md justify-content-end align-items-center ms-lg-3 ms-md-2'>
                              <ul className='navbar-nav'>
                                  <li className='navbar-item me-lg-5 ms-lg-5'>
                                      <h5 className='text-start'>For Contact</h5>
                                      <p className='text-start me-4 me-lg-0'>hello@bacpacx.com</p>
                                  </li>
                                  <li className='navbar-item me-lg-5'>
                                      <h5 className='text-start'>For Support</h5>
                                      <p className='text-start me-4 me-lg-0'>support@bacpacx.com</p>
                                  </li>
                                  <li className='navbar-item me-lg-5'>
                                      <h5 className='text-start'>For Press</h5>
                                      <p className='text-start'>press@bacpacx.com</p>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>

              <hr className='text-muted' style={{ width: '100%' }} />

              <div className='col mb-4 mt-3'>
                  <div className='text-center'>
                      <p className='h6'>
                          Bacpacx Private Limited., Copyrights 2022. All Rights Reserved.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Footer;


//ms-lg-5 ps-lg-2 ms-md-0 ps-md-0 ms-sm-5 ps-sm-5

//ms-lg-3 ms-md-2