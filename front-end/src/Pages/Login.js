import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import PreLoader from '../Components/PreLoader'
import Search from '../Components/Search'

const Login = () => {
  return (
    <React.Fragment>
      {/* <PreLoader /> */}
      <Header />
      <BreadCrumb />
      <section className='login spad'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='login__form'>
                <h3>Login</h3>
                <form action='#'>
                  <div className='input__item'>
                    <input type='text' placeholder='Email address' />
                    <span className='icon_mail'></span>
                  </div>
                  <div className='input__item'>
                    <input type='text' placeholder='Password' />
                    <span className='icon_lock'></span>
                  </div>
                  <button type='submit' className='site-btn'>
                    Login Now
                  </button>
                </form>
                <Link to='#' className='forget_pass'>
                  Forgot Your Password?
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='login__register'>
                <h3>Dont’t Have An Account?</h3>
                <Link to='/signup' className='primary-btn'>
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div className='login__social'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-6'>
                <div className='login__social__links'>
                  <span>or</span>
                  <ul>
                    <li>
                      <Link to='#' className='facebook'>
                        <i className='fa fa-facebook'></i> Sign in With Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to='#' className='google'>
                        <i className='fa fa-google'></i> Sign in With Google
                      </Link>
                    </li>
                    <li>
                      <Link to='#' className='twitter'>
                        <i className='fa fa-twitter'></i> Sign in With Twitter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Search />
    </React.Fragment>
  )
}

export default Login
