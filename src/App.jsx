import { useState } from 'react' 
import viteLogo from '/vite.svg'
import './App.css' 
import logo from '../src/assets/Logo.png'

import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Architecture from './pages/Architecture' 
import Contact from './pages/Contact'
import About from './pages/About'
import Architecture2 from './pages/Architecture2'
import ProjectPage from './pages/ProjectPage'
import Home1 from './pages/Home1'
 
export const logoImg = logo

function App() { 

  return (
    <div className='text-white font-poppins'>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/><Home1/></>}/>
          <Route path='/architecture' element={<><Navbar/><Architecture/></>}/> 
          <Route path='/project-page' element={<><Navbar/><ProjectPage/></>}/> 
          <Route path='/interior' element={<><Navbar/><Architecture2/></>}/>
          <Route path='/contact' element={<><Navbar/><Contact/></>}/>
          <Route path='/about' element={<><Navbar/><About/></>}/> 
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
