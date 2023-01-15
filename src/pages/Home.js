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

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg' alt='main banner' className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Per Profesionistet.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Per 999$ ose 41.62$/muaj</p>
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg' alt='main banner' className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Produkt i ri.</h4>
                  <h5>iPad Air</h5>
                  <p>Per 999$ ose 41.62$/muaj</p>
                </div>
              </div>
              
              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg' alt='main banner' className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>15% Ulje.</h4>
                  <h5>Smartwatch 7.</h5>
                  <p>Merrni brandin me te fundit.</p>
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg' alt='main banner' className='img-fluid rounded-3'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving.</h4>
                  <h5>Airpods Max.</h5>
                  <p>Produkti me i mire ne treg <br/> dhe me cmim te arsyeshem</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>Te gjitha porosit mbi 100$</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Oferta</h6>
                    <p className='mb-0'>Ruaj 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Suport 24/7</h6>
                    <p className='mb-0'>Shop me expertet</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Cmime te perballueshme</h6>
                    <p className='mb-0'>Cmime fabrike</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt=''services />>
                  <div>
                    <h6>Pagesa te sigurta</h6>
                    <p className='mb-0'>100% te sigurta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center flex-wrap'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Muzik & Lojera</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Kamera</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Laptop</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Celulare</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Cope</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;