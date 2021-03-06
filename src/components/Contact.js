import React, { Component } from 'react';
import '../App.css'

export default class Contact extends Component {
  render(){
    return(
      <div className="container">
      <div className="row">
      <h3>Contact Me</h3>
      <p>Please <a href="mailto:lauraathom@gmail.com" id="email">email me</a> for any business or
      miscellaneous inquiries about either design or web development. I'd love to hear from you!
      <br></br>
      <br></br>
      <b>I'm currently seeking a full-time front-end development position.</b> My LinkedIn, GitHub,
      and resume' can also be found in the icon toolbar above. <i className="fa fa-hand-pointer-o" aria-hidden="true"></i><br>
      </br><br></br>

      This portfolio is not entirely representative of my full range of technical skills and expertise, but rather a glimpse into what I can do. Email me for more work samples if desired.
      Thank you for viewing my portfolio!


      </p>
      </div>
      </div>
    )
  }
}
