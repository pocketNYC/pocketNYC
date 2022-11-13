import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import Users from "../features/users/Users";
import Events from "../features/events/Events";
import AddEvent from "../features/events/AddEvent";
import Admin from "../features/admin/Admin";
import Error from "../features/error/Error";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import AllResources from "../features/resources/AllResources";
import SingleResource from "../features/resources/SingleResource";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />

          {/* {isAdmin && (
            <>
              <Route path="/events/add" element={<AddEvent />} />
              <Route path="/users" element={<Users />} /> 
              <Route path="/adminpage" element={<AdminPage />} />
            </>
          )} */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/resources" element={<AllResources />} />
          <Route path="/resources/:category" element={<SingleResource />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
          <Route path="/resources" element={<AllResources />} />
          <Route path="/resources/:category" element={<SingleResource />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
