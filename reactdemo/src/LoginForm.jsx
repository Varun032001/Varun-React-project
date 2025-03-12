import React, { useState } from 'react';
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const validateForm = () => {
    let errorsCopy = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    errorsCopy.email = !email
      ? "Email is required"
      : !emailRegex.test(email)
      ? "Enter a valid email"
      : "";

    errorsCopy.password = !password
      ? "Password is required"
      : !passwordRegex.test(password)
      ? "Enter a valid password"
      : "";

    setError(errorsCopy);
    return Object.values(errorsCopy).every((error) => error === "");
  };

  const onLogin = () => {
    if (!validateForm()) return;
    if (email === "varun@gmail.com" && password === "password123") {
      setLoginSuccess(true);
      setError({});
      
    } else {
      setError({ login: "Invalid email or password" });
      setLoginSuccess(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h2 className="mb-4">Login</h2>

          {loginSuccess && <Alert variant="success">Login successful!</Alert>}
          {error.login && <Alert variant="danger">{error.login}</Alert>}

          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            <br />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <br />

            <Button variant="primary" onClick={onLogin}>Login</Button>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
