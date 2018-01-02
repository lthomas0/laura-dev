import React, { Component } from 'react';
import '../App.css'

export default class Projects extends Component {
  render(){
    return(

      <div className="container">
      <div className="row">
        <div id="airbnb-splash" className="col-md-4 well">
        <h3 className="grow"><a href="https://airbnb-splash-ui.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="airbnb">Airbnb UI Redesign</a> </h3>
        <p className="project1"> UI splash page reimagined as minimal/image-heavy and built with HTML, and CSS/LESS. </p>
      </div>
      <div id="cart-ui" className="col-md-4 well">
      <h3 className="grow"><a href="https://a-mcqueen-ui.herokuapp.com" rel="noopener noreferrer" target="_blank" id="cartui">Shopping Cart UI</a> </h3>
      <p className="project2">Alexander McQueen product cart mockup UI built using HTML, CSS, and Sketch. </p>
    </div>
    <div id="pizza-picker" className="col-md-4 well">
    <h3 className="grow"><a href="https://pizza-picker-angular.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="pizza">Pizza Picker</a></h3>
    <p className="project3"> Random pizza order generator made mostly for fun. Built with HTML, CSS, AngularJS. </p>
  </div>
  <div id="my-links" className="col-md-4 well">
  <h3 className="grow"><a href="https://my-news-links.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="mylinks">myLinks</a> </h3>
  <p className="project4">Grid of my favorite news sites and sources using HTML, CSS, SCSS, Babel, Vue.js. </p>
</div>
<div id="react-shop" className="col-md-4 well">
<h3 className="grow"> <a href="https://lthomas0.github.io/react-redux-shopping-cart/" rel="noopener noreferrer" target="_blank" id="reactshop">React/Redux Cart</a></h3>
<p className="project5"> Shopping cart with checkout button UI. Built with ReactJS, Redux, Nodejs, and Yarn.</p>
</div>
<div id="jquery-img" className="col-md-4 well">
<h3 className="grow"> <a href="https://image-upload-preview.herokuapp.com/" rel="noopener noreferrer" target="_blank" id="jquery">Image Uploader</a> </h3>
<p className="project6">Image uploader with thumbnail preview. Built with HTML, CSS, SCSS, and jQuery.</p>
</div>
<div id="react-todo-list" className="col-md-4 well">
<h3 className="grow"><a href="https://lthomas0.github.io/simple-todo-app/" rel="noopener noreferrer" target="_blank" id="todolist">ReactJS To-Do App</a></h3>
<p className="project7">Colorful To-do app for young kids. Built with ReactJS, Webpack, Babel, Node, CSS.</p>
</div>
<div id="holiday-newsletter" className="col-md-4 well">
<h3 className="grow"><a href="https://night-sky-splash.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="holiday">Holiday Splash Page</a></h3>
<p className="project8">Email landing page UI for family newsletter built with HTML, CSS, & jQuery.</p>
</div>
<div id="project-green" className="col-md-4 well">
<h3 className="grow"><a href="http://res.cloudinary.com/ddaei4bhd/image/upload/v1512852777/projectgreen_f4sor1.jpg" rel="noopener noreferrer" target="_blank" id="green">GREEN Project</a></h3>
<p className="project9">Gateway Greening Portal* built with Node.js, MongoDB, Express, AngularJS, Bootstrap.</p>
</div>
<div id="diabetic-donut" className="col-md-4 well">
<h3 className="grow"><a href="http://diabeticdonut.com/" rel="noopener noreferrer" target="_blank" id="donut">Diabetic Donut</a></h3>
<p className="project10">Minimal aesthetic book launch site with Wordpress, Javascript, eCommerce and CSS.</p>
</div>
<div id="susan-dory" className="col-md-4 well">
<h3 className="grow"><a href="http://res.cloudinary.com/ddaei4bhd/image/upload/v1512860911/susandory_macy6l.jpg" rel="noopener noreferrer" target="_blank" id="susan">Susan Dory Designs</a></h3>
<p className="project11">Non-CMS online store for non-tech client. Built with Adobe Muse and FTP hosting.</p>
</div>
<div id="coming-soon" className="col-md-4 well">
<h3 id="moreavail" className="option animated flipInX">MORE SAMPLES AVAILABLE UPON REQUEST</h3>
<p id="thumb" className="option animated jackInTheBox"><a href="mailto:lauraathom@gmail.com"><i className="fa fa-hand-o-right fa-lg" aria-hidden="true"></i></a></p>
<p id="tinyText"> * = most recent project</p>

</div>
</div>
</div>

    )
  }
}
