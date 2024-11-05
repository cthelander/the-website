import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  Helllo world {count}
  <button onClick={() => setCount(count +1 )} >add</button>
    </>
  )
}

export default App
