import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

import Checkout from './customer/components/Checkout/Checkout';
import Orders from './customer/components/Orders/Orders';
import OrderDetail from './customer/components/Orders/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
