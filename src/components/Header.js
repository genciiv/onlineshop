import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Transporti Falas Mbi 100$ & Kthimi Falas</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Tel: <a className='text-white' href='tel:+355 69 85 52 838'>+355 69 85 52 838</a></p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
            <h2>
                <Link className='text-white'>G-code</Link>
              </h2>
            </div>
            <div className='col-5'>
            <div className="input-group mb-3">
                <input type="text" className="form-control py-2" placeholder="Kerko produktin ketu..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='./images/compare.svg' alt='compare' />
                    <p className='mb-0'>Krahaso <br /> Produktet</p>
                  </Link>
                </div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='./images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Listat e <br /> Preferuara</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='./images/user.svg' alt='user' />
                    <p className='mb-0'>Log in <br /> Acount</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='./images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span> 
                      <p className='mb-0'>$ 500</p> 
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='/images/menu.svg' alt=''></img>
                      <span className=''>Shop Kategorite</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item" to=''>Action</Link></li>
                      <li><Link className="dropdown-item" to=''>Another action</Link></li>
                      <li><Link className="dropdown-item" to=''>Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex lign-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Dyqani</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/contact">Kontakti</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;