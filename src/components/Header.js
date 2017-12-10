import React, { Component } from 'react';
import '../App.css'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render(){
    return(
      <div className="page-header">
      <h1 className="option animated bounceInLeft">Laura Thomas</h1>
      <h2 id="occupation" className="option animated bounceInRight">Web Developer + Designer</h2>
      <h2 id="menu" className="option animated bounceInUp"><a href="http://www.linkedin.com/in/lthomas0"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> <a href="http://www.github.com/lthomas0" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>  <a href="mailto:lauraathom@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a> <a href="http://res.cloudinary.com/ddaei4bhd/image/upload/v1512650350/laura1_imbq1e.pdf" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></h2>
      <div id="grow">
      <Link id="menu1" to="/home" className="col-sm-3 option animated jello">Home</Link>
      <Link id="menu2" to="/" className="col-sm-3 option animated jello">About</Link>
      <Link id="menu3" to="/projects" className="col-sm-3 option animated jello">Projects</Link>
      <Link id="menu4" to="/contact" className="col-sm-3 option animated jello">Contact Me</Link>
      </div></div>
    )
  }
}
