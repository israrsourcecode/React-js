
import { useState } from 'react'
import './App.css'

const App = () => {
  const [num, num1] = useState(0)
  function Incearment() {
    num1(num + 1)
  }
  function Decearment() {
    num1(num - 1)
  }
  return (
    <div>
      <div className="box">{num}</div>
      <button onClick={Decearment}>Decreament</button>
      <button onClick={Incearment}>Increament</button>
    </div>
  )

}

export default App
