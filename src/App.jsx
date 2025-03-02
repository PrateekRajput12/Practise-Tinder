import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Body from './component/Body'
import Feed from './component/Feed'
import Login from './component/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/login' element={<Login></Login>} />
            <Route path='/feed' element={<Feed></Feed>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App