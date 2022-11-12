// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { authenticate } from "../../app/store";

// function Login() {
//   const dispatch = useDispatch();
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const email = evt.target.email.value;
//     const password = evt.target.password.value;

//     dispatch(authenticate({ email, password }));
//     setValidated(true);
//   };
//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Group className="mb-6" controlId="email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control required type="text" placeholder="Enter Email" />
//         <Form.Control.Feedback type="invalid">
//           Please provide an email.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group className="mb-6" controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control required type="password" placeholder="Enter Password" />
//         <Form.Control.Feedback type="invalid">
//           Please provide a password.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Login;
