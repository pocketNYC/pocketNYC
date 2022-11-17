import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmationPage({firstName}) {
  return (
    <div>
        <h2>{`Thank you ${firstName}!`}</h2>
        <h4>Your event has been submitted.</h4>
        <Link to='/events'><button className='confirm-evt-btn-close'>Close</button></Link>
        <Link to='/add'><button className='confirm-evt-btn-add-more'>Add Another Event</button></Link>
    </div>
  )
}

export default ConfirmationPage