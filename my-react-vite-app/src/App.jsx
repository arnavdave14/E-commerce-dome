import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  )
}

export default App
