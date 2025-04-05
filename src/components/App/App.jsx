import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import BaseHome from '../Pages/BaseHome/BaseHome'
import './App.css'

function App() {
  const [loggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className='page'>
      <div className='page__content'>
        <Routes>
          <Route 
            path='/'
            element={ loggedIn ?
              <>
                <Home />
              </>
              : 
              <>
                <BaseHome />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
