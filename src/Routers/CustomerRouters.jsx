import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/pages/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Orders from '../customer/components/Orders/Orders'
import OrderDetail from '../customer/components/Orders/OrderDetail'

const CustomerRouters = () => {
  return (
    <div>

      <div>
        <Navigation />

      </div>

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelone/:leveltwo/:levelthree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Orders/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
     
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters
