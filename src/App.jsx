import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Per Scholas Component
//This will usually be defined in a separate file
function PerScholasLogo() {
  return (
    <img
      src="https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg"
      alt="Per Scholas"
    />
  )
}

function App() {

  const element = <h1>Hello World</h1>


  const listItems = [
    <li>Item 1</li>,
    <li>Item 2</li>,
    <li>Item 3</li>,
  ]
  return (
    <>
    <PerScholasLogo />
    <PerScholasLogo />
    <PerScholasLogo />
    <h1 
    className="title"
    style={{color: 'skyblue',
    border: '1px solid white',
    borderRadius: '15px',
    }}>
      My First React App</h1>

    {element}

    <h3>List of Items</h3>
    <ul>{listItems}</ul>
    </>
  )
} 

export default App
