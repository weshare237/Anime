import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Section Begin --> */}
      <footer className='footer'>
        <div className='page-up'>
          <Link to='#' id='scrollToTopButton'>
            <span className='arrow_carrot-up'></span>
          </Link>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='footer__logo'>
                <Link to='./index.html'>
                  <img src='img/logo.png' alt='' />
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='footer__nav'>
                <ul>
                  <li className='active'>
                    <Link to='./index.html'>Homepage</Link>
                  </li>
                  <li>
                    <Link to='./categories.html'>Categories</Link>
                  </li>
                  <li>
                    <Link to='./blog.html'>Our Blog</Link>
                  </li>
                  <li>
                    <Link to='#'>Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </>
  )
}

export default Footer
