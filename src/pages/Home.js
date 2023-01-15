import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src='images/main-banner-1.jpg' alt='main banner' className='img-fluid rounded-3'/>
                <div className='main-banner-content position-absolute'>
                  <h4>Per Profesionistet.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Per 999$ ose 41.62$/muaj</p>
                  <Link className='button'>Bli tani</Link>
                </div>
              </div>
            </div>
            <div className='col-6'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;