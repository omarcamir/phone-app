import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container text-center d-flex justify-content-center py-5">
        <div className="col-sm-12 col-md-6">
            <h2 className='fs-1'>Error 404</h2>
            <h3 className='fs-2'>Page Not Found</h3>
            <div className="btn__content py-5">
            <button className='btn btn-warning text-capitalize w-25 fw-bold'><Link to='../' className='page-link'>go to Home</Link></button>
            </div>
        </div>
    </div>
  )
}

export default NotFound