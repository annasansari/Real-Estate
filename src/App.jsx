import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Header from './components/Header'

function App() {
// const [searchBar, setSearchBar] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Header searchBar={false}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route ute path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter  >
    </>
  )
}

export default App
