import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>PocketNYC</h1>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "black" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/events"
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/resources"
                >
                  Resources
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "black" }}
                      aria-current="page"
                      href="/add"
                    >
                      Add Event
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "black" }}
                    >
                      My Account
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href={`/users/${userId}`}>
                          View Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href={`/users/${userId}/favorites`}
                        >
                          View Favorites
                        </a>
                      </li>
                    </ul>
                  </li>

                  {isAdmin && (
                    <>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Admin
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="/users">
                              View Users
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="/admin">
                              Events Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      style={{ color: "black" }}
                      onClick={logoutAndRedirectHome}
                    >
                      Log Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "black" }}
                      aria-current="page"
                      href="login"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "black" }}
                      aria-current="page"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
