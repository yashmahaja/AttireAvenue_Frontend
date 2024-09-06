import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/Footer/footer';

function App() {
  return (
    <div className="">
      <Navigation/>
     <div>
    {/* <Homepage/> */}
    <Product/>
     </div>
     
     <Footer/>
    </div>
  );
}

export default App;
