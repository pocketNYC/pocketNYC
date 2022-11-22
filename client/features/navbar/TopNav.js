import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";

export default function TopNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      <MDBNavbar fixed="top" light bgColor="light">
        <MDBContainer fluid>
          <a className="navbar-brand" href="/">
            <img
              src="
          https://i.imgur.com/0wLXpHh.png"
              alt="PocketNYC logo"
              width="65"
              height="70"
            />
            PocketNYC
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/"
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "black" }}
                  aria-current="page"
                  href="/faq"
                >
                  Help
                </a>
              </li>

              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "black" }}
                  >
                    User
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href={`/users/${userId}`}>
                        My Profile
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href={`/users/${userId}/favorites`}
                      >
                        My Favorites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/calendar">
                        My Calendar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/add">
                        Add Event
                      </a>
                    </li>

                    {isAdmin ? (
                      <>
                        <li>
                          <a
                            style={{ color: "red" }}
                            className="dropdown-item"
                            href="/users"
                          >
                            Admin: View Users
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "red" }}
                            className="dropdown-item"
                            href="/admin"
                          >
                            Admin: Events Dashboard
                          </a>
                        </li>
                      </>
                    ) : null}
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={logoutAndRedirectHome}
                      >
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
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
                      User
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="/login">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/signup">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
          <MDBNavbarBrand href="/calendar">
            <CalendarMonthIcon />
          </MDBNavbarBrand>
          <MDBNavbarBrand href="/faq">
            <HelpIcon />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
