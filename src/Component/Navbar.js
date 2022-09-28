import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/carts">Carts : {props.numberCart}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
