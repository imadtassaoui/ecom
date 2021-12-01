import React from "react";
import "./navbar.scss";
import logo from "./logo.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Navbar = ({ currentUser, hidden }) => {
  return (
    <div className="navbar">
      <div className="shipping-bar">
        <h4>
          Free shipping on all US orders. Free returns on orders over 300$
        </h4>
      </div>
      <img src={logo} alt="logo" className="logo" />

      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {currentUser ? (
          <li
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </li>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </ul>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navbar);
