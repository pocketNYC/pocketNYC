// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// import { authenticate } from "../../app/store";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// import { InputGroup } from "react-bootstrap";

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
//     <div className="container-fluid">
//       <div className="p-2">
//         <center>
//           <div className="col-md-6">
//             <div className="card mx-auto text-center">
//               <div className="p-2">
//                 <img
//                   src="https://i.imgur.com/yzhTwq7.png"
//                   className="card-img-top"
//                   style={{ height: "200px", maxWidth: "660px" }}
//                 />
//               </div>
//               <div className="card-body text-center" style={{ size: 45 }}>
//                 <h3>Login</h3>
//                 <Form
//                   noValidate
//                   validated={validated}
//                   onSubmit={handleSubmit}
//                   name={name}
//                 >
//                   <Form.Group
//                     // className="mb-3"
//                     controlId="email"
//                     label="Email Address"
//                   >
//                     <Form.Label>E-mail Address</Form.Label>
//                     <InputGroup>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="E-mail Address"
//                       />
//                     </InputGroup>
//                     <Form.Control.Feedback type="invalid">
//                       Please provide your email.
//                     </Form.Control.Feedback>
//                   </Form.Group>

//                   <Form.Group className="" controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <InputGroup>
//                       <Form.Control
//                         required
//                         style={{ paddingRight: "0px" }}
//                         type={passwordShown ? "text" : "password"}
//                         placeholder="Password"
//                         aria-describedby="basic-addon2"
//                       />
//                       <Button
//                         variant="outline-primary"
//                         onClick={togglePassword}
//                         size="md"
//                       >
//                         {passwordShown ? (
//                           <VisibilityOffIcon />
//                         ) : (
//                           <RemoveRedEyeIcon />
//                         )}
//                       </Button>{" "}
//                     </InputGroup>
//                     <Form.Control.Feedback type="invalid">
//                       Please provide a password.
//                     </Form.Control.Feedback>{" "}
//                   </Form.Group>
//                   <div className="row"></div>
//                   <Button
//                     variant="outline-primary"
//                     className="center"
//                     type="submit"
//                     size="md"
//                   >
//                     {displayName}
//                   </Button>
//                 </Form>{" "}
//               </div>
//             </div>
//           </div>
//         </center>
//         <div className="p-4"></div>
//       </div>