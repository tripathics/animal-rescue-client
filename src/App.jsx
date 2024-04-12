import { useState } from 'react'

import './App.css'
import Home from './pages/home'
import Login from './pages/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Login />
    </>
  )
}

export default App
