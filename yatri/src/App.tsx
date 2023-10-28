import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FeedPage from './pages/FeedPages';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":name/" element={<FeedPage />} />

      </Routes>

    </>
  )
}

export default App
