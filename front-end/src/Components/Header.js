import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../Helpers/cookies'
import { deleteCookie } from '../Helpers/cookies'
import { getLocalStorage } from '../Helpers/localStorage'
import { toast } from 'react-toastify'

const Header = () => {
  const navigate = useNavigate()
  const token = getCookie('token')
  const user_logout = () => {
    deleteCookie('token')
    localStorage.clear()
    toast.success('You successfully logout')
    navigate('/')
  }

  return (
    <>
      {/* <!-- Header Section Begin --> */}
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <div className='header__logo'>
                <Link to='./index.html'>
                  <img src='img/logo.png' alt='' />
                </Link>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='header__nav'>
                <nav className='header__menu mobile-menu'>
                  <ul>
                    <li>
                      <Link to='./index.html'>Homepage</Link>
                    </li>
                    <li>
                      <Link to='./categories.html'>
                        Categories <span className='arrow_carrot-down'></span>
                      </Link>
                      <ul className='dropdown'>
                        <li>
                          <Link to='./categories.html'>Categories</Link>
                        </li>
                        <li>
                          <Link to='./anime-details.html'>Anime Details</Link>
                        </li>
                        <li>
                          <Link to='./anime-watching.html'>Anime Watching</Link>
                        </li>
                        <li>
                          <Link to='./blog-details.html'>Blog Details</Link>
                        </li>
                        <li>
                          <Link to='./signup.html'>Sign Up</Link>
                        </li>
                        <li>
                          <Link to='./login.html'>Login</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='./blog.html'>Our Blog</Link>
                    </li>
                    <li>
                      <Link to='#'>Contacts</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='header__right'>
                <Link to='#' className='search-switch'>
                  <span className='icon_search'></span>
                </Link>
                {token ? (
                  <button onClick={user_logout}>
                    <span className='icon_profile'></span>
                  </button>
                ) : (
                  <Link to='/signin'>
                    <span className='icon_profile'></span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div id='mobile-menu-wrap'></div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </>
  )
}

export default Header
