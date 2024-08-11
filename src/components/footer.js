import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Save the money</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free delivery</h3>
                        <p>For order from $50</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>Call us anytime</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Money back</h3>
                        <p>100% safety only secure payments</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo.webp' alt=''></img>
                    <p>Stay home and shop online you're too pretty to have to took for a parking spot. When the going gets tough the tough go online shopping.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>contact us</h3>
                        <ul>
                            <li>4005, Online shopping mart</li>
                            <li>+(012)99999999</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer