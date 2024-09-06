import React from 'react'

const Gradients = () => {
  return (
    <div>
  <div className="bg-gradient-to-r from-gray-50 to-black p-10 mb-10 mt-10 w-1/2">
    <button className='bg-white mx-10 p-10'>one</button>
    <button className='bg-white mx-10 p-10'>two</button>
  </div>

  <div className='bg-gradient-to-r from-black to-white w-1/2 p-10 '>
    <button className='bg-white mx-10 p-10'>three</button>
    <button className='bg-white mx-10 p-10'>four</button>
  </div>
</div>

  )
}

export default Gradients