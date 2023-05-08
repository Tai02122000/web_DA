import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/UserActions.js";
import logo from "./../image/logo.png";
import "./../css/header.css";

const Header = () => {
  const [keyword, setKeyWord] = useState();

  let history = useHistory();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="Announcement">
      <div className="container">
        <div className="row">
          <div className="container column">
            <div className=" column-left">
              <nav className="site-menu horizontal">
                <ul className="menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1893">
                    <a>About</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1893">
                    <a>My account</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1893">
                    <a>Wishlist</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="column-right">
              <div className="text-content">
                Need help ? Call Us: <span>000 000 </span>
              </div>
              <div className="header-switchers"></div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="header">
        <div className="container">
          {/* mobile headr */}
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyWord(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/*PC header */}
          <div className="pc-header" style={{ paddingTop: "20px" }}>
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group" onSubmit={submitHandler}>
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyWord(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <div className="post-product">
                  <Link>
                    <i class="fa-solid fa-newspaper"></i>
                  </Link>
                </div>

                <div className="cart-btn">
                  <Link to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>

              </div>
              <div className="menu2">
                <div className="container">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                      <ul className="menu-2-2">
                        <li>
                          <Link> HOME </Link>
                        </li>
                        <li>
                          <Link> SHOP </Link>
                        </li>
                        <li>
                          <Link> BLOG </Link>
                        </li>
                        <li>
                          <Link> CONTACT </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
