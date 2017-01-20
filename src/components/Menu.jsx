import React,{Component} from 'react';


export default class Menu extends Component {
  render(){
    return (
    <nav className="navbar navbar-inverse bg-inverse">
      <ul className="nav navbar-nav" >
        <li><a href="#">Home</a></li>
        <li><a href="#cuser">Sign Up</a></li>
      </ul>
    </nav>
    );
  }
}
