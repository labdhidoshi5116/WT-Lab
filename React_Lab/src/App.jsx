import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './component/Content'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Content />      
      <Footer />
    </>
  )
}

export default App
