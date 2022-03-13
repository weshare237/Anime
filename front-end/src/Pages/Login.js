import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import PreLoader from '../Components/PreLoader'
import Search from '../Components/Search'
import axios from 'axios'
import { toast } from 'react-toastify'
import { setAuthentication, isAuthenticated } from '../Helpers/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = { email, password }
    try {
      console.log('hello')
      const res = await axios.post('http://localhost:5000/login', user)
      setAuthentication(res.data.token, res.data.user)
      toast.success('Login successfull')
      navigate('/')
    } catch (error) {
      toast.error('Wrong username or password')
    }
  }

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
                <form onSubmit={handleSubmit}>
                  <div className='input__item'>
                    <input
                      type='email'
                      placeholder='Email address'
                      name='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className='icon_mail'></span>
                  </div>
                  <div className='input__item'>
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
