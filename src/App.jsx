import { useState } from 'react'
import { BrowserRouter } from 'react-router';
import './App.css'
import RoutesList from './Routes/RoutesList';

function App() {

  return (
    <>
    <BrowserRouter>
      <RoutesList/>
    </BrowserRouter>
    </>
  )
}

export default App
