import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 text-black round p-4 rounded-xl m-4'>Telwind</h1>

      <Card btnText = "click me"/>
      <Card btnText = "Tap me"/>



    </>
  )
}

export default App
