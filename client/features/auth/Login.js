import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authenticate } from "../../app/store";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordImg, setPasswordImg] = useState(<VisibilityIcon/>);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
    setValidated(true);
    navigate("/");
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  } 
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} name={name}>
      <Form.Group className="mb-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="text" placeholder="Enter Email" />
        <Form.Control.Feedback type="invalid">
          Please provide your email.
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-6" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type={passwordShown ? "text" : "password"}
          placeholder="Enter Password" 
        />
          <Button onClick={togglePassword}><VisibilityIcon/></Button>
         
        <Form.Control.Feedback type="invalid">
          Please provide a password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        {displayName}
      </Button>
    </Form>
  );
}

export default Login;
