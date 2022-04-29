import React, { useRef, useEffect } from 'react';

import laptop from '../assets/images/laptop.png';
import feature1 from '../assets/images/feature_1.png';
import feature2 from '../assets/images/feature_2.png';
import feature3 from '../assets/images/feature_3.png';
import feature4 from '../assets/images/feature_4.png';
//import underline from '../assets/images/underline.png';
import mainView_Cover from '../assets/images/mainView_cover.png';
import appstore from '../assets/images/App_store.svg';
import playstore from '../assets/images/google-play-badge.png'

//ms-sm-3 ms-md-4 ms-lg-0
const Home = () => {
 
  const headerRef = useRef();

  useEffect(() => {
    var arr = ['Entrepreneurs', 'Students', 'Designers', 'Marketers', 'Developers'];
    var index = 0;
    
    setInterval(() => {
        if(headerRef.current) {
          headerRef.current.textContent = arr[index++ % arr.length];
        }
    }, 2000)
  }, []);

  return (
    <div className='container-lg'>
      <div className='row justify-content-start align-items-start mt-5'>
        <div className="col-sm-10 col-md-10 col-lg-6 text-center text-lg-start ms-md-5 ms-sm-5 ms-lg-0">
          <p>You of tomorrow  ------
            <i className='bi bi-circle-fill text-primary btn-sm'>
              <i className='bi bi-circle btn-sm text-dark'></i>
            </i>
          </p>
          <h1>
            <div className="h1">
              The Indian safest
              <br/>
              <span><p className='my-2'>Professional Network</p></span>
              for <span className='text-primary' ref={headerRef}>Developers</span>
            </div>
            <p className="h5 fw-light pt-4 mb-5 lh-base">
              Bacpacx is a social network that focus on <br/>micro-blogging
              and professional networking. 
              Download it today!
            </p>
          </h1>
          <a href='/'>
          <img src={appstore} alt='appstore_img' width="150" className='img-fluid' />
          </a>
          <a href='/'>
          <img src={playstore} alt='playstore_img' width="170" className='img-fluid' />
          </a>
        </div>
        {/* <div className="col-lg-5 img-fluid text-center ms-lg-5 ps-lg-3 ms-3 mb-5 mt-lg-0 mt-5">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: '450px', width: '410px' }} />
        </div> */}
        <div className="col-lg-5 img-fluid text-center ms-lg-5 mb-5 mt-lg-0 mt-5 d-none d-md-block">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: '450px', width: '410px' }}/>
        </div>
        <div className="col-lg-5 img-fluid text-center ms-lg-5 mb-5 mt-lg-0 mt-5 d-md-none">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: 'auto', width: '330px' }}/>
        </div>

        <hr className='text-muted' style={{ width: '100%' }} />

        <div className='col-md-12 col-lg-12 col-sm-12 col-12 my-2 py-4 d-none d-md-block'>
          <div className='text-center'>
            <p className='h5'>Product Demo</p>
            <p>Bacpacx is a social network that focus on micro-blogging</p>
            <img src={laptop} alt='laptop_img' className='img-fluid' style={{ height: 'auto', maxWidth: '70%' }} />
          </div>
        </div>
        <div className='col-md-12 col-lg-12 col-sm-12 col-12 my-2 py-4 d-md-none'>
          <div className='text-center'>
            <p className='h5'>Product Demo</p>
            <p>Bacpacx is a social network that focus on micro-blogging</p>
            <img src={laptop} alt='laptop_img' className='img-fluid' style={{ height: 'auto', maxWidth: '95%' }} />
          </div>
        </div>

        <hr className='text-muted' style={{ width: '100%' }} />

         <div className='col my-3 mb-5'>
          <div className='text-center'>
            <p className='h5'>Features</p>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-6 col-sm-10 col-md-8 d-none d-lg-block my-lg-4'>
                <div className='text-center'>
                  <img src={feature1} alt='feature1_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
              <div className='col-lg-5 col-md-7 col-sm-10 text-center text-lg-start mb-3'>
                <h5 className='my-3'>Features feature feature feature</h5>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
              </div>
              <div className='col-lg-6 col-sm-10 d-lg-none'>
                <div className='text-center'>
                  <img src={feature1} alt='feature2_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
            </div>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-5 col-md-7 col-sm-10 text-center text-lg-start mb-3'>
                <h5 className='my-3'>Features feature feature feature</h5>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
              </div>
              <div className='col-lg-6 col-sm-10 col-md-8 my-lg-4'>
                <div className='text-center'>
                  <img src={feature2} alt='feature2_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
            </div>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-5 col-sm-10 col-md-8 d-none d-lg-block my-lg-5'>
                <div className='text-center'>
                  <img src={feature3} alt='feature3_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
              <div className='col-lg-5 col-md-7 col-sm-10 text-center text-lg-start mb-3'>
                <h5 className='my-3'>Features feature feature feature</h5>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
              </div>
              <div className='col-lg-5 col-sm-10 col-md-8 d-lg-none'>
                <div className='text-center'>
                  <img src={feature3} alt='feature3_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
            </div>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-5 col-md-7 col-sm-10 text-center text-lg-start mb-3'>
                <h5 className='my-3'>Features feature feature feature</h5>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
                <p>Bacpacx is a social network that focus on micro-blogging
                  and professional networking. Download it today!
                </p>
              </div>
              <div className='col-lg-6 col-sm-10 col-md-8 my-lg-5'>
                <div className='text-center'>
                  <img src={feature4} alt='feature4_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='text-muted' style={{ width: '100%' }} />

      </div>
    </div>
  )
}

export default Home;


//my-3 mb-5 my-sm-5 py-sm-4