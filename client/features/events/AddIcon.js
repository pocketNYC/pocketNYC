import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddIcon() {
  const navigate = useNavigate();
  return (
    <>
      <AddCircleIcon
        onClick={() => navigate("/add")}
        style={{ display: "flex", align: "center" }}
      />
      <label>Add Event</label>
    </>
  );
}
