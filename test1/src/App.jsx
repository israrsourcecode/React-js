import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setTitle('')
    setDetail('')

    const newTask = {
      title: title,
      detail: detail
    }

    setTask([...task, newTask])
    console.log(task);
  }
  const deleteTask = (index) => {
    const updateTask = task.filter((not_important_parameter, i) => i !== index)
    setTask(updateTask)

  }

  return (
    <>
      <div className="form-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h1>Add Notes</h1>
              <form onSubmit={(e) => {
                submitHandler(e)
              }}>
                <input type="text" placeholder='Enter Node Heading' value={title} onChange={(e) => {
                  setTitle(e.target.value)

                }} />
                <textarea className='detail' type="text" placeholder='Write Details' value={detail} onChange={(e) => {
                  setDetail(e.target.value)
                }} />
                <button className='button'>Submit</button>
              </form>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-img text-end">
                <img className='img-fuild' src="https://static.vecteezy.com/system/resources/thumbnails/023/492/712/small/3d-notes-icon-png.png" alt="" />
              </div>
            </div>
          </div>

          {/* card */}
          <div className="card-container">
            <h2 className='text-center'>Your Cards</h2>
            <div className="cards">
              {task.map(function (item, index) {
                return <Card
                  key={index}
                  title={item.title}
                  detail={item.detail}
                  deleteTask={deleteTask}
                  index={index}
                />

              })}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
