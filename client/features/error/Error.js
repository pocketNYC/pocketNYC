import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <center>
          <img
            src={
              "https://t4.ftcdn.net/jpg/04/72/82/55/360_F_472825540_Wnx8f2eqPcZjnAgyZ5Rp6RFCUZt0niF6.jpg"
            }
            className="error-img"
          />
          <h1>HEEE-HAWWW!</h1>
          <h2>We're sorry, this page doesn't exist!</h2>
          <Button onClick={() => navigate("/home")}>Home</Button>
        </center>
      </main>
    </div>
  );
}
