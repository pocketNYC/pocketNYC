import React, { useEffect } from "react";
import { fetchResources, selectResources } from "./resourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllResources = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  return (
    <div>
      <h1>All Resources Page</h1>
      <ul>
        {resources
          ? resources.map((resource) => {
              return (
                <li key={resource.id}>
                  <Link to={`/resources/${resource.id}`}>{resource.name}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default AllResources;
