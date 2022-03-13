import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import PreLoader from '../Components/PreLoader'
import Search from '../Components/Search'
import { toast } from 'react-toastify'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const createUser = async (user) => {
    try {
      const res = await axios.post('http://localhost:5000/register', user)
      console.log('res----------', res)
      toast.success(res.data.msg)
      setEmail('')
      setPassword('')
      setUsername('')
      navigate('/signin')
    } catch (error) {
      toast.error('Error while create account. Please try again!')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { email, username, password }
    createUser(user)
  }

  return (
    <>
      {/* <PreLoader /> */}
      <Header />
      <BreadCrumb />
      <section className='signup spad'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='login__form'>
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                  <div className='input__item'>
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email address'
                    />
                    <span className='icon_mail'></span>
                  </div>
                  <div className='input__item'>
                    <input
                      type='text'
                      name='username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder='Your Name'
                    />
                    <span className='icon_profile'></span>
                  </div>
                  <div className='input__item'>
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                    <span className='icon_lock'></span>
                  </div>
                  <button type='submit' className='site-btn'>
                    Login Now
                  </button>
                </form>
                <h5>
                  Already have an account? <Link to='/signin'>Log In!</Link>
                </h5>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='login__social__links'>
                <h3>Login With:</h3>
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
      </section>
      <Footer />
      <Search />
    </>
  )
}

export default Register
