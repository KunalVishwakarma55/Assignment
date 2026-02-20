import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import OurPolicy from './components/OurPolicy'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>

          <OurPolicy/>
          <Newsletter/>
           <Footer/>
    </div>
  )
}

export default App
