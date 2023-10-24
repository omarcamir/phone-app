import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container py-5">
      <h2>Contact</h2>
      <div className="col-12 mx-auto text-start d-md-flex justify-content-around">
        <h3 className='my-4'>
          Linkedin : <a href="https://www.linkedin.com/in/omarcamir" className='btn-link' target='_blank'> Omar Samir Ismail</a>
        </h3>
        <h3 className='my-4'>
          GitHub : <a href="https://github.com/omarcamir" className='btn-link' target='_blank'> Omar Samir Ismail</a>
        </h3>
      </div>
      <div className="btn__content my-3 w-md-25 d-flex flex-column mx-auto">
        <button className='btn btn-warning text-capitalize w-50 fw-bold my-2 mx-auto'><Link to='../' className='page-link'>go to Home</Link></button>
      </div>
    </div>
  )
}

export default Contact;