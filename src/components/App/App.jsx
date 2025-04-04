import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

function App() {
  return (
    <div className='page'>
      <div className='page__content'>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
