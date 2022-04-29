import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/bacpacx-full-Logo.png';
//import active from '../assets/images/Ellipse.svg';

const NavigationBar = () => {

  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
       <div className='container-lg'>
           <Link to='/' className='navbar-brand'>
               <img src={logo} alt='logo_img' className='rounded float-start mt-1 me-2 ms-3 ms-lg-0' style={{height:'27px',width: '27px'}} /> 
               {/* <img src={active} className='rounded float-start mt-1 me-2 ms-3 ms-lg-0' style={{height:'30px',width: '40px'}} />    */}
               <span className='h6 d-none d-lg-inline'>
                    BACPACX
                    {/* <div style={{width: 'auto'}}>
                    <img src={active} className='rounded float-start mt-1 me-2 ms-3 ms-lg-0' style={{height:'30px',width: '40px'}} />   
                    <h1>Text over image</h1>
            </div> */}
               </span>
           </Link>
           <button className='navbar-toggler'
                   type='button'
                   data-bs-toggle='collapse'
                   data-bs-target='#main-nav'
                   aria-controls='main-nav'
                   aria-label='Toggle navigation'
                   aria-expanded='false'
                   >
               <span className='navbar-toggler-icon' />
           </button>
           <div id='main-nav' className='collapse navbar-collapse ms-3 justify-content-end align-items-center'>
               <ul className='navbar-nav'>
                   <li id='home' className='navbar-item'>
                         <NavLink to = "/" className='nav-link me-lg-3 h6' style={({isActive}) => {return {color: isActive ? '#0d6efd':'black'}}}>Home</NavLink>
                   </li>
                   <li id='vision' className='navbar-item'>
                         <NavLink to = "/OurVision" className='nav-link me-lg-3 h6' style={({isActive}) => {return {color: isActive ? '#0d6efd':'black'}}}>Our Vision</NavLink>
                   </li>
                   <li id='investor' className='navbar-item'>
                        <NavLink to = "/Investors" className='nav-link me-lg-3 h6' style={({isActive}) => { return {color: isActive ? '#0d6efd':'black'}}}>Investors</NavLink>
                   </li>
                   <li id='faq' className='navbar-item'>
                        <NavLink to = "/FAQ" className='nav-link me-lg-3 h6' style={({isActive}) => { return {color: isActive ? '#0d6efd':'black'}}}>FAQ</NavLink>
                   </li>
                   <li id='contact' className='navbar-item'>
                        <NavLink to = "/Contact" className = "nav-link h6" style={({isActive}) => { return {color: isActive ? '#0d6efd': 'black'}}}>Contact Us</NavLink>
                   </li>
               </ul>
           </div>
       </div>
    </nav>
  )
}

export default NavigationBar;


// style={({isActive}) => { return {color: isActive ? 'blue':'black'}}}


// className={({ isActive }) => (isActive ? 'nav-link me-lg-3 h6 text-primary' : 'nav-link me-lg-3 h6 text-dark')}