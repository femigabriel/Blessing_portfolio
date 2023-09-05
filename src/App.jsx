import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import { Home } from './components/pages/Home'
import { Navbar } from './components/laybout/Navbar'
import Resume from './components/pages/Resume'
import AboutMe from './components/pages/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
<Navbar /> 
<Routes>  
<Route path="/" element={<Home />} />   
<Route path="/resume" element={<Resume />} />   
<Route path="/about" element={<AboutMe />} /> 
 </Routes>

  </div>
  )
}

export default App
