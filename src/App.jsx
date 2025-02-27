import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Body from './component/Body'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/login' element={<div>Login</div>} />
            <Route path='/test' element={<div>Test</div>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App