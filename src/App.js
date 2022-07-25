import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes >
        <Route path='/' exact element={<ProductListing /> } />
        <Route path='/product/:productId' exact element={<ProductDetails /> } />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
