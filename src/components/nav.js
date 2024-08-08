import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import './nav.css'
const Nav = () => {
  return (
    <>
      <div className='header'>
        <div className='top-header'>
          <div className='logo'>
            <bold className='logo'><em>Online Shopping</em></bold>
          </div>
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button>SignIn</button>
            </div>
            <div className='btn'>
              <button>Logout</button>
            </div>
            <div className='icon'>
              <FiLogOut />
            </div>
          </div>
        </div>
        <div className='last-header'>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/cart' className='link'>Cart</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className='search-bar'>
            <input type='text' value='' placeholder='Search'></input>
            <button><IoIosSearch /></button>
          </div>
          <div className='icon'>
            <div className='favorite'>
              <MdFavoriteBorder />
            </div>
            <div className='cart'>
              <BsCart3 />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav