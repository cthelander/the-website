import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Welcome to project Carly!


      <button onClick={() => setCount(count +1 )} >add</button>

      <img src="./Instagram_icon.png"/>
      {count}
    </div>
  )
}

export default App
