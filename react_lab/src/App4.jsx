import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Layout from './Layout';

function App4() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App4;
