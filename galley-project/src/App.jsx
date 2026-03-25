import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [count, setCount] = useState(1)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoad(true)
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${count}&limit=10`)
      setUserData(data)
      setLoad(false)
    }
    fetchData()
  }, [count])

  let gallery_images = userData.map((value) => {
    return <Card key={value.id} value={value} />
  })


  const prev = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const next = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1> Gallery</h1>

      <div className="gallery">
        {load ? <p>loading...</p> : gallery_images}
      </div>
      <div className="btns">
        <button onClick={prev} disabled={count === 1}>prev</button>
        <span>{count}</span>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}

export default App
