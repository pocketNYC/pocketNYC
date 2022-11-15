import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { fetchFavoriteEvent } from "../favorites/favoriteEventSlice";
import { fetchFavoriteResource } from "../favorites/favoriteResourceSlice";
import { Link } from "react-router-dom";

function SingleUserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);


  const { firstName, lastName, email, interests, borough, id } = useSelector(
    (state) => state.user.singleUser
  );

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
    dispatch(fetchFavoriteEvent());
    dispatch(fetchFavoriteResource());
  }, [dispatch]);

  return (
    <div>
      <Link to={`/users/${userId}/edit`}>
      <button className='edit-profile-button'>Edit Profile</button>
      </Link>
      <h4> {`${firstName} ${lastName}`} </h4>
      <h6>
        <strong>Email:</strong> {email}
      </h6>
      <h6>
        <strong>Interests: </strong>
        {[interests].toString().split(",").join(", ")}
      </h6>
      <h6>
        <strong>Borough: </strong>
        {borough}
      </h6>
    </div>
  );
}

export default SingleUserProfile;
