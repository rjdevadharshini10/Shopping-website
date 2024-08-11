import React, { useState } from 'react'
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/rout'
import Footer from './components/footer'
import Homeproduct from './components/home_product'
const App = () => {
  const [cart, setCart] = useState([])
  const [shop, setShop] = useState(Homeproduct)
  const [search, setSearch] = useState('')
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () => {
    setShop(Homeproduct)
  }
  const searchlength = (search || []).length === 0
  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something !")
      setShop(Homeproduct)
    }
    else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter)
    }
  }
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert("This product is alleardy added in cart")
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("Added To cart")
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
      {/* <div><Picture /></div> */}
    </>
  )
}
export default App
