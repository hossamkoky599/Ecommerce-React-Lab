import React from "react";
import { Link } from "react-router";
import "../assets/css/header.css"
import { useSelector } from "react-redux";
export default function Header() {
  //to read value stored in redux us => useSelector
  const counterVal = useSelector(state => state.counter.value)
  return (
   <div className="container-fluid">
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand text-white" href="#">
        Products
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            {/* <Link className="nav-link" to={}>

        </Link> */}
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item mr-4 cart">
            <Link to={"/cart"} className="nav-link "><i className="fa-solid fa-cart-shopping"></i></Link>
            <span className="counter">{counterVal}</span>
          </li>
        </ul>
      </div>
    </nav>
    </div>
   </div>
  );
}
