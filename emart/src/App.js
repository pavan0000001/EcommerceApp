import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Home from './component/Home';
import Navbar from './component/Navbar';
import './App.css';
import Product from './component/Product';
import Login from './component/Login';
import Signup from './component/Signup';
import Register from './component/Register';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import AdminPanel from './component/AdminPanel';






function App() {

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPanel />} />
        
        
        
        

      </Routes>
    </>  
  );
}
export default App;

