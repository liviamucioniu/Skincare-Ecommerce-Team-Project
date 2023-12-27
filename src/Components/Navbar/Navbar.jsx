import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isNavShowing, setIsNavShowing] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            {/*****hamburger menu ******/}
            <div className="hamburger-menu">
                <button
                    className="nav-toggle-btn"
                    onClick={() => setIsNavShowing(!isNavShowing)}
                >
                    {isNavShowing ? <MdOutlineClose /> : <FaBars />}
                </button>
            </div>
            <ul
                className={`nav-menu ${isNavShowing ? "show-nav" : "hide-nav"}`}
            >
                <li
                    onClick={() => {
                        setMenu("home");
                    }}
                >
                    <Link to="/">Home</Link>
                    {menu === "home" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("face");
                    }}
                >
                    <Link to="/face">Face</Link>{" "}
                    {menu === "face" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("body");
                    }}
                >
                    <Link to="/body">Body</Link>{" "}
                    {menu === "body" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("bestseller");
                    }}
                >
                    <Link to="bestseller">Best Seller</Link>
                    {menu === "bestseller" ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu("cart");
                    }}
                >
                    <Link to="/cart">Cart</Link>{" "}
                    {menu === "cart" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
