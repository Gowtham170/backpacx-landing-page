import React from 'react';

import feature1 from '../assets/images/feature_1.png';
import feature2 from '../assets/images/feature_2.png';
import mainView_Cover from '../assets/images/mainView_cover.png';

//ms-3 ms-lg-0
//img - ms-lg-5 ps-lg-3
const Our_Vision = () => {
  return (
    <div className='container-lg'>
      <div className='row justify-content-start align-items-start mt-5'>
        <div className="col-sm-12 col-md-12 col-lg-7 text-center text-lg-start">
          <p>The Vision  ------
            <i className='bi bi-circle-fill text-primary btn-sm'>
              <i className='bi bi-circle btn-sm text-dark'></i>
            </i>
          </p>
          <h2>
            <div className="h1 lh-base">
              To become safe and 
              <br/>Professional network that 
              <br/>impact people's in positive way.
            </div>
            <p className="h5 fw-light pt-4">
              Today is the opportunity to build the
              Tomorrow you want.
            </p>
          </h2>
        </div>
        {/* <div className="col-lg-4 col-md-12 img-fluid text-center ms-lg-5 ps-lg-3">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: 'auto', maxWidth: '100%' }} />
        </div> */}
        <div className="col-lg-4 img-fluid text-center ms-lg-5 mb-3 mt-lg-0 mt-5 d-none d-md-block">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: 'auto', width: '350px' }}/>
        </div>
        <div className="col-lg-5 img-fluid text-center ms-lg-5 mb-5 mt-lg-0 mt-5 d-md-none">
          <img src={mainView_Cover} alt='mainCover_img' style={{ height: 'auto', width: '330px' }}/>
        </div>

        <hr className='text-muted mt-5' style={{ width: '100%' }} />

        <div className='row justify-content-center align-items-center mt-5'>
          <div className='col-lg-6 col-sm-10 col-md-8 d-none d-lg-block'>
            <div className='text-center'>
              <img src={feature1} alt='feature1_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
            </div>
          </div>
          <div className='col-lg-6 col-md-10 col-sm-9 col-11 text-center text-lg-start mb-3 my-3'>
            <p>
              <small className='fs-2'>I</small>
               ndia has already finished 74 years after it received its Independence.
              Fight for the Independence wasn't an easy one. We mustn't forget that freedom is
              the blood of many fighters. We must try to contribute to develop India. India is
              still a developing country.
            </p>
            <p>
              So, Bacpacx is contributing to its development. We measure which would be handy for
              India's development mission. We must train and provide Employement to the youths and
              promote Education.
            </p>
          </div>
          <div className='col-lg-6 col-sm-10 col-md-8 d-lg-none'>
            <div className='text-center'>
              <img src={feature1} alt='feature1_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
            </div>
          </div>
        </div>

        <hr className='text-muted mt-5' style={{ width: '100%' }} />

        <div className='text-center mt-4'>
            <p className='h5'>Our Culture</p>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-10 col-sm-9 col-11 text-center text-lg-start mb-3'>
                <p>
                   We treat people's equally. Our spartans are the great pillars in building
                   our Bacpacx. We believe providing them a cool work environment, high-end 
                   devices with humble skilled people around them can create magic and great
                   masterpiece works every day.
                </p>
                <p>
                  We treat people's equally. Our spartans are the great pillars in building
                  our Bacpacx.
                </p>
              </div>
              <div className='col-lg-6 col-sm-10 col-md-8'>
                <div className='text-center'>
                  <img src={feature2} alt='feature2_img' className='img-fluid' style={{ height: 'auto', width: '70%' }} />
                </div>
              </div>
            </div>
        </div>

        <hr className='text-muted mt-5' style={{ width: '100%' }} />

      </div>
    </div>
  )
}

export default Our_Vision;