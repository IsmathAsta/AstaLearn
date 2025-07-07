
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CourseDetail from './components/CourseSection/CourseDetail'
import Footer from './components/Footer'
import NavbarComp from './components/NavbarComp'
import Home from './components/HomePage/Home'
import Login from './components/LoginSignup/Login'
import Signup from './components/LoginSignup/Signup'
import ImageGallery from './components/HomePage/ImageGallery'
import Dummy from './components/Dummy'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  

  return (
    <>
    {/* <Provider store={store}>
      <ImageGallery/>
      <Dummy/>
    </Provider> */}
      <NavbarComp/>
     
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/coursedetail' element={<CourseDetail/>}/>
      </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
