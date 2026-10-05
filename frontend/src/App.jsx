import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Updatemodel from './components/Updatemodel'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Updatemodel/>} />
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App