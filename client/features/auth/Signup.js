// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { authenticate } from "../../app/store";

// function Signup() {
//   const dispatch = useDispatch();
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const firstName = evt.target.firstName.value;
//     const lastName = evt.target.lastName.value;
//     const email = evt.target.email.value;
//     const password = evt.target.password.value;
//     const interest = evt.target.interest.value;

//     dispatch(authenticate({ firstName, lastName, email, password, interest }));
//     setValidated(true);
//   };
//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Group className="mb-6" controlId="firstName">
//         <Form.Label>First Name</Form.Label>
//         <Form.Control required type="text" placeholder="Enter First Name" />
//         <Form.Control.Feedback type="invalid">
//           Please provide your first name.
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Form.Group className="mb-6" controlId="lastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control required type="text" placeholder="Enter Your Last Name" />
//         <Form.Control.Feedback type="invalid">
//           Please provide your last name.
//         </Form.Control.Feedback>
//       </Form.Group>

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

//       <Form.Group className="mb-6" controlId="interest">
//         <Form.Label>Interest</Form.Label>
//         <Form.Select
//           required
//           aria-label="Default select example"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         >
//           <option selected>Select</option>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//         </Form.Select>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Signup;
