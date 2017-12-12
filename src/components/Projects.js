import React, { Component } from 'react';
import '../App.css'

export default class Projects extends Component {
  render(){
    return(
      <div className="row">
        <div id="airbnb-splash" className="col-md-4 well">
        <h3 className="grow"><a href="https://airbnb-splash-ui.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="airbnb">Airbnb UI Redesign</a> </h3>
        <p> UI splash page reimagined and built with HTML, and CSS/LESS. Click title for live preview.</p>
      </div>
      <div id="cart-ui" className="col-md-4 well">
      <h3 className="grow"><a href="https://a-mcqueen-ui.herokuapp.com" rel="noopener noreferrer" target="_blank" id="cartui">Shopping Cart UI</a> </h3>
      <p>Alexander McQueen product cart mockup UI built using HTML, CSS, and Sketch. Click title for live preview.</p>
    </div>
    <div id="pizza-picker" className="col-md-4 well">
    <h3 className="grow"><a href="https://pizza-picker-angular.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="pizza">Pizza Picker</a></h3>
    <p> Generator that chooses what pizza to order using HTML, CSS, AngularJS. Click title for live preview.</p>
  </div>
  <div id="my-links" className="col-md-4 well">
  <h3 className="grow"><a href="https://my-news-links.herokuapp.com/" rel="noopener noreferrer" target="_blank" id="mylinks">myLinks</a> </h3>
  <p>Grid of my favorite news sites and sources using HTML, CSS, SCSS, Babel, Vue.js. Click title for live preview.</p>
</div>
<div id="react-shop" className="col-md-4 well">
<h3 className="grow"> <a href="https://lthomas0.github.io/react-redux-shopping-cart/" rel="noopener noreferrer" target="_blank" id="reactshop">React/Redux Shopping Cart</a></h3>
<p> Shopping cart with checkout button UI. Built with ReactJS, Redux, Nodejs, and Yarn. Click title for live preview.</p>
</div>
<div id="jquery-img" className="col-md-4 well">
<h3 className="grow"> <a href="https://image-upload-preview.herokuapp.com/" rel="noopener noreferrer" target="_blank" id="jquery">Image Uploader</a> </h3>
<p> Image uploader complete with thumbnail preview. Built with HTML, CSS, SCSS, and jQuery. Click title for preview.</p>
</div>
<div id="react-todo-list" className="col-md-4 well">
<h3 className="grow"><a href="https://lthomas0.github.io/simple-todo-app/" rel="noopener noreferrer" target="_blank" id="todolist">ReactJS To-Do App</a></h3>
<p>To-do app for individuals of all ages. Built with ReactJS, Webpack, Babel, Node, CSS. Click title for live preview.</p>
</div>
<div id="holiday-newsletter" className="col-md-4 well">
<h3 className="grow"><a href="https://night-sky-splash.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank" id="holiday">Holiday Newsletter Splash</a></h3>
<p>Email subscription page for family newsletter with HTML, CSS, jQuery (input disabled). Click title for preview.</p>
</div>
<div id="project-green" className="col-md-4 well">
<h3 className="grow"><a href="http://res.cloudinary.com/ddaei4bhd/image/upload/v1512852777/projectgreen_f4sor1.jpg" rel="noopener noreferrer" target="_blank" id="green">GREEN Project (WCA)</a></h3>
<p>The GREEN Project for Watershed Conservation Authority using Node.js/MongoDB, Express, AngularJS, Bootsrap.</p>
</div>
<div id="diabetic-donut" className="col-md-4 well">
<h3 className="grow"><a href="http://diabeticdonut.com/" rel="noopener noreferrer" target="_blank" id="donut">Diabetic Donut</a></h3>
<p>Book launch site for author with desired goal of minimal look with Wordpress, Javascript, eCommerce and CSS.</p>
</div>
<div id="susan-dory" className="col-md-4 well">
<h3 className="grow"><a href="http://res.cloudinary.com/ddaei4bhd/image/upload/v1512860911/susandory_macy6l.jpg" rel="noopener noreferrer" target="_blank" id="susan">Susan Dory Designs</a></h3>
<p>Independent jewelry designer wanted simple, non-CMS online store. Built with Adobe Muse and FTP hosting.</p>
</div>
<div id="coming-soon" className="col-md-4 well">
<h3 id="moreavail" className="option animated flipInX">More available</h3>
<h4 id="uponreq" className="option animated flipInY">Upon Request</h4><p id="thumb" className="option animated jackInTheBox"><a href="mailto:lauraathom@gmail.com" target="_blank" id="thumb2"><i className="fa fa-hand-o-right" aria-hidden="true"></i></a></p>

</div>
</div>


    )
  }
}
