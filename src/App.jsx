import { useState } from 'react'
import './App.css'
import Header  from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
