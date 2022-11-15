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
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-light">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/events"
                >
                  Events
                </a>
              </li>
              <li class="nav-item">
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
                  <li class="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "black" }}
                      aria-current="page"
                      href="/events/add"
                    >
                      Add Event
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "black" }}
                    >
                      My Account
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href={`/users/${userId}`}>
                          View Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href={`/users/${userId}/favorites`}
                        >
                          View Favorites
                        </a>
                      </li>
                    </ul>
                  </li>

                  {isAdmin && (
                    <>
                      <Link to="/users">Users</Link>
                    </>
                  )}
                  <li class="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      style={{ color: "black" }}
                      onClick={logoutAndRedirectHome}
                    >
                      Log out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <a
                      className="nav-link active"
                      style={{ color: "black" }}
                      aria-current="page"
                      href="login"
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
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
