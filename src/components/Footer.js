import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
              <div className='col-5'>
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img src='images/newsletter.png' alt=''></img>
                  <h2 className='mb-0 text-white'>Sign Up per Newsletter</h2>
                </div>
              </div>
              <div className='col-7'>
              <div className="input-group mb-3">
                <input type="text" className="form-control py-1" placeholder="Shto Adresen Tuaj te E-ma." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
              </div>
          </div>
        </div>
      </footer>



      <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy:{ new Date().getFullYear() }; G-code</p>
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer;