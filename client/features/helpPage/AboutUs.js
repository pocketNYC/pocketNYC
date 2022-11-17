import React from 'react'
import { Link } from 'react-router-dom'


function AboutUs() {
  return (
    <div><h3>About Us</h3>
    <p>PocketNYC is an app initially developed by {/*link to github or linkedin?*/} Corinna, Cynthia, Noor, and Breana as a senior capstone project. PocketNYC hosts several <strong>free</strong> <Link to='/resources'>resources</Link> and <Link to='/events'> events</Link> for fellow New Yorkers in the metropolitan area. <s> From the design to the information we place on our app, we kept our visitors in mind as we wanted the appeal of our app to be its accessibility and ease of use. The five boroughs of NYC are a melting pot, therefore PocketNYC is translatable to over 10 languages. </s> From the team at PocketNYC, we hope you enjoy using our app as much as we enjoyed making it for you!
    </p> 
    </div>
  )
}

export default AboutUs