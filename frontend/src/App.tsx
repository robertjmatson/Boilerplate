import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"
import { Contact } from "./pages/Contact"
  
  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
export default App
