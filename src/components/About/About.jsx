import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function About() {
  const counterGlobalState = useSelector(store => store.counter.counter)


  return (
    <div className="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <div className="profile rounded rounded-circle">
            </div>
          </div>
          <div className="about__texts col-sm-12 col-md-6 h-100 d-flex flex-column justify-content-between">
            <h3 className='fs-3 fw-bold'>I'm</h3>
            <h1 className='fs-1 fw-bold my-4'><span className='bg-dark rounded rounded-pill text-warning p-2'>Omar</span> Samir</h1>
            <h2 className='fs-2 fw-bold'>Front-End Developer</h2>
            <div className="btn__content my-3 w-50 d-flex flex-column">
              <button className='btn btn-warning text-capitalize w-50 fw-bold my-2'><Link to='../' className='page-link'>go to Home</Link></button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <span className='fs-2 me-3 fw-bold text-secondary'>Gained: </span>
                <h2 className='fs-1'>{counterGlobalState}</h2>
                <span className='fs-2 ms-3 fw-bold text-success'>$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;