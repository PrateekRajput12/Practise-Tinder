import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Body from './component/Body'
import Feed from './component/Feed'
import Login from './component/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Profile from './component/Profile'

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />} >
              <Route path='/login' element={<Login></Login>} />
              <Route path='/feed' element={<Feed></Feed>} />
              <Route path='/profile' element={<Profile></Profile>} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App