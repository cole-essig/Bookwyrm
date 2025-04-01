import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import viteLogo from '/vite.svg'
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
                <h1>Hello World!</h1>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
