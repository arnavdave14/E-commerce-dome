import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledButton = styled.button`
  border:1px solid black;
  background-color: white;
  color: black;
  font-weight: 400;
  border-radius:10px;


  &:hover{
  border:1px solid white;
  background-color: black;
  color: white;
  font-weight: 400;
  border-radius:10px;



  &:focus{
  border:2px solid pink;
  background-color: #006eff;
  color: #00d05a;
  font-weight: 400;
  border-radius:15px;
  }
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  )
}

export default App
