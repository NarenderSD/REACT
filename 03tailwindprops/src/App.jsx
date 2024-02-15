import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Narender",
    age: 21
  }

  let newARR = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind CSS Test</h1>
      <Card username="Thakur ki chai" />
      <Card username="Narender" />
     
    </>
  )
}

export default App
