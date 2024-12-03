
import Navigationbar from './components/header/Navigationbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Listing from './components/listing/Listing'
import Blog from './components/blog/Blog'
import AddCar from './components/addcar/AddCar'
import PageNotFound from './components/nofound/PageNotFound'
import AllCars from './components/all-cars/AllCars'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
const App = () => {
  

  return (
    <>
      {/* header section */}
     <Navigationbar />

     {/* react router setup */}
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/all-cars' element={<AllCars />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/add-car' element={<AddCar />} />
      {/* <Route path='/all-cars' element={<AllCars />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />
     </Routes>


     {/* footer section */}
     <Footer />
    </>
  )
}

export default App