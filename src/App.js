import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation/>
     <div>
    {/* <Homepage/> */}
    {/* <Product/> */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    <Checkout/>
     </div>
     
     <Footer/>
    </div>
  );
}

export default App;
