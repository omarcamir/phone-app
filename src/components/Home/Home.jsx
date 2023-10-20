import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="container text-center py-5 d-flex justify-content-center align-items-center">
      <div className="col-sm-12 col-md-6">
        <h2 className='fs-1'>Welcome To Our E-commerce</h2>
        <div className="btn__content d-flex justify-content-evenly align-items-center w-100 py-5">
          <button className='btn btn-warning text-capitalize w-25'><Link to='../shop' className='page-link'>go to shop</Link></button>
          <button className='btn btn-dark text-capitalize w-25'><Link to='../about' className='page-link'>About</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home