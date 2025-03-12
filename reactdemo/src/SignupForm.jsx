import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupForm = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [formMode, setFormMode] = useState("create");

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const validateForm = () => {
    let errorsCopy = {};

    const nameRegex = /^[a-zA-Z\s]{8,12}$/;
    const usernameRegex = /^[a-zA-Z0-9]{8,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    const confirmpasswordRegex = passwordRegex;

    errorsCopy.name = !name ? "Name is required" : !nameRegex.test(name) ? "Name must be at least 8 characters long and contain only letters & spaces" : "";
    errorsCopy.username = !username ? "Username is required" : !usernameRegex.test(username) ? "Username must be at least 8 characters long and contain only letters & numbers" : "";
    errorsCopy.email = !email ? "Email is required" : !emailRegex.test(email) ? "Enter a valid email address" : "";
    errorsCopy.phone = !phone ? "Phone is required" : !phoneRegex.test(phone) ? "Enter a valid phone number" : "";
    errorsCopy.password = !password ? "Password is required" : !passwordRegex.test(password) ? "Enter a valid password" : "";
    errorsCopy.confirmpassword = !confirmpassword ? "Password is required" : !confirmpasswordRegex.test(confirmpassword) ? "Enter a valid password" : "";

    setErrors(errorsCopy);
    return Object.values(errorsCopy).every((error) => error === "");
  };

  const onSave = () => {
    if (!validateForm()) return;

    if (formMode === "edit") {
      let updatedUsers = [...users];
      updatedUsers[editIndex] = { name, username, email, phone, password, confirmpassword };
      setUsers(updatedUsers);
      setFormMode("create");
      setEditIndex(null);
    } else {
      setUsers([...users, { name, username, email, phone, password, confirmpassword }]);
    }

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmpassword("");
    setErrors({});
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">{formMode === "edit" ? "Edit User" : "Sign Up"}</h2>

      <form>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        <div className="mb-3">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.username}</div>
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.phone}</div>
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        <div className="mb-3">
          <label>Confirm Password:</label>
          <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.confirmpassword}</div>
        </div>

        <Button variant="primary" onClick={onSave}>
          {formMode === "edit" ? "Update" : "Sign Up"}
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
