import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("inputing.....");

  }
  return (
    <div className='h-full lg:flex bg-black text-white '>
      <form className='flex flex-col lg:w-1/2 gap-4 p-10 items-start' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text"
          placeholder="Enter Notes Heading"
          className='px-5 py-2 w-full border-2 outline-none font-medium rounded'
        />
        <textarea placeholder='Enter Details'
          className='px-5 py-2 h-32 font-medium w-full border-2 rounded outline-none'
          id=""></textarea>
        <button className='bg-white w-full font-medium  text-black px-5 py-2 outline-none rounded'>Add More</button>
      </form>
      <div className="lg:w-1/2 border-l-2 bg-gray-900 p-10">
        <h1 className='text-3xl font-bold '>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className="w-52 h-40 rounded-2xl bg-white"></div>
          <div className="w-52 h-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App
