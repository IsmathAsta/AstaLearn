
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CourseDetail from './components/CourseSection/CourseDetail'
import Footer from './components/Footer'
import NavbarComp from './components/NavbarComp'
import Home from './components/HomePg2/Home'

function App() {
  

  return (
    <>
   
      <NavbarComp/>
     
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/coursedetail' element={<CourseDetail/>}/>
      </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
