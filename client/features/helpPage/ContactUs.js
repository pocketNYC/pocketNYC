import React from 'react'
import { Form } from 'react-router-dom'

function ContactUs() {
  return (
    <div><h3>Contact Us!</h3>
    <form>
      <input placeholder='enter your name'></input>
      <input placeholder='enter your email'></input>
      <input placeholder='enter your message'></input>
      </form>
    </div>
  )
}

export default ContactUs