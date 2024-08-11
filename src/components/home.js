import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Homeproduct from './home_product'
import './home.css'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturdProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }
  useEffect(() => {
    productcategory()
  })
  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
      <div className='home'>
        <div className='top-banner'>

          <div className='content'>
            <h3>Trending Collection</h3>
            <h2>Explore new Collection</h2>
            <p>30% offer at your first order</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left-box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct()}>Trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate('top')}>top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => {
                      return (
                        <>
                          <div className='box'>
                            <div className='img-box'>
                              <img src={curElm.image} alt='pic'></img>
                              <div className='icon'>
                                <div className='icon_box'>
                                  <AiFillEye />
                                </div>
                                <div className='icon_box'>
                                  <AiFillHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>${curElm.price}</p>
                              <button className='btn' onClick={() => addtocart(curElm)}>Add to cart</button>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                <button><Link to='/shop' className='link'>Show more</Link></button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>our testmonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHldCQVOtMrlB1tGyGC379EZFzF1a9Qsp4Q&s' alt='testmonial'></img>
                    </div>
                    <div className='info'>
                      <h3>stephan lilly</h3>
                      <h4>web designer</h4>
                      <p>It has amazing collections and trending collection up to date.I really loved to purchase the product.</p>
                    </div>
                    <div className='img_box'>
                      <img src='data:image/jpeg;base64,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' alt='testmonial'></img>
                    </div>
                    <div className='info'>
                      <h3>Jasmine beaula</h3>
                      <h4>web designer</h4>
                      <p>Good place to buy a product.I like the user interface of this website.I really like the product to purchase.</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our malling list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home