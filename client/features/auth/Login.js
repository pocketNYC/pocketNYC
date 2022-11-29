import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { authenticate } from "../../app/store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const nonMobile = useMediaQuery("(mid-width: 1000px)");

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
    setValidated(true);

    if (validated) {
      navigate("/home");
    }
  };

  return (
    <Box
      width={nonMobile ? "50%" : "75%"}
      p="2 rem"
      m="15rem auto"
      borderRadius="2rem"
      boxShadow="10px 10px 10px 10px rgb(207, 207, 207)"
      backgroundColor="beige"
    >
      <Box
        display="grid"
        gap="25px"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        sx={{ "& > div": { gridColumn: nonMobile ? undefined : "span 4" } }}
      >
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name={name}
        >
          <h2>Login</h2>
          <hr />

          <FloatingLabel
            controlId="email"
            label="Email Address"
            className="mb-3"
          >
            <Form.Control required type="text" placeholder="Email" />
            <Form.Control.Feedback type="invalid">
              Please provide your email.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              required
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </FloatingLabel>

          <Button variant="outline-primary" onClick={togglePassword} size="md">
            {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </Button>

          <Button variant="outline-primary" type="submit" size="md">
            {displayName}
          </Button>
        </Form>
      </Box>
    </Box>
  );
}

export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { authenticate } from "../../app/store";
// import InputGroup from "react-bootstrap/InputGroup";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// function Login({ name, displayName }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [validated, setValidated] = useState(false);
//   const [passwordShown, setPasswordShown] = useState(false);

//   const togglePassword = (evt) => {
//     evt.preventDefault();
//     setPasswordShown(!passwordShown);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const formName = evt.target.name;
//     const email = evt.target.email.value;
//     const password = evt.target.password.value;

//     dispatch(authenticate({ email, password, method: formName }));
//     setValidated(true);

//     if (validated) {
//       navigate("/home");
//     }
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit} name={name}>
//       <Form.Group className="mb-6" controlId="email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control required type="text" placeholder="Enter Email" />
//         <Form.Control.Feedback type="invalid">
//           Please provide your email.
//         </Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group className="mb-6" controlId="password">
//         <Form.Label>Password</Form.Label>
//         <InputGroup className="mb-3">
//           <Form.Control
//             required
//             type={passwordShown ? "text" : "password"}
//             placeholder="Enter Password"
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a password.
//           </Form.Control.Feedback>
//           <InputGroup.Text id="basic-addon2">
//             <button onClick={togglePassword}>
//               {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
//             </button>
//           </InputGroup.Text>
//         </InputGroup>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         {displayName}
//       </Button>
//     </Form>
//   );
// }

// export default Login;
