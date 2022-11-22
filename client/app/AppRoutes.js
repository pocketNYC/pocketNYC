import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import Home from "../features/home/Home";
import UserList from "../features/admin/UserList";
import Events from "../features/events/Events";
import AddEvent from "../features/events/AddEvent";
import Admin from "../features/admin/Admin";
import EditUserProfile from "../features/users/EditUserAccountDetails";
import Error from "../features/error/Error";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import AllResources from "../features/resources/AllResources";
import ResourceCategory from "../features/resources/ResourceCategory";
import Favorites from "../features/favorites/Favorites";
import SingleResource from "../features/resources/SingleResource";
import SingleUserProfile from "../features/users/SingleUserProfile";
import SingleEvent from "../features/events/SingleEvent";
import ConfirmationPage from "../features/events/ConfirmationPage";
import Faq from "../features/helpPage/HelpPage";
import UserCalendar from "../features/calendar/UserCalendar";
import LoadingScreen from "../features/loading/LoadingScreen";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          {isLoggedIn ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<SingleEvent />} />
              <Route path="/add" element={<AddEvent />} />
              <Route path="/calendar" element={<UserCalendar />} />
              <Route path="/loading" element={<LoadingScreen />} />
              <Route
                path="/add/success"
                element={<ConfirmationPage user={user} />}
              />
              <Route path="/resources" element={<AllResources />} />
              <Route
                path="/resources/:category/"
                element={<ResourceCategory />}
              />
              <Route
                path={`/users/${userId}`}
                element={<SingleUserProfile user={user} />}
              />
              <Route
                path={`/users/${user.id}/edit`}
                element={<EditUserProfile user={user} />}
              />
              <Route
                path={`/users/${userId}/favorites`}
                element={<Favorites />}
              />
              <Route
                path={`/users/${userId}/favorites/:id`}
                element={<SingleResource />}
              />
              <Route path="/faq" element={<Faq />} />)
              {isAdmin && (
                <>
                  <Route path="/users" element={<UserList />} />
                  <Route path="/admin" element={<Admin />} />
                </>
              )}
              <Route path="*" element={<Error />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/login"
                element={<Login name="login" displayName="Login" />}
              />
              <Route
                path="/signup"
                element={<Signup name="signup" displayName="Sign Up" />}
              />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<SingleEvent />} />
              <Route path="/resources" element={<AllResources />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/loading" element={<LoadingScreen />} />
              <Route
                path="/resources/:category"
                element={<ResourceCategory />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          )}
        </div>
       )} {/**remove this to test */}
    </div>
  );
};

export default AppRoutes;
