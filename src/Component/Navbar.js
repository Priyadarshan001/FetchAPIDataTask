import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div>
      <div>
        <nav>
          <div className="muiIconHome">
            <Link to="/">
              <HomeIcon fontSize="large" />
            </Link>
          </div>

          <div className="muiIconCart">
            <Link to="/carts">
              <ShoppingCartIcon fontSize="large" />{" "}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
