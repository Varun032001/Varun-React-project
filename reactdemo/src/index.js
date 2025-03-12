// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




 import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Start with login page first
  const [currentPage, setCurrentPage] = useState("login");

  // Page mapping
  const pages = {
    signup: <SignupForm />,
    login: <LoginForm />,
    home: <HomePage />,
  };

  return (
    <div>
      {/* Simple Navigation */}
      <nav className="p-3 bg-dark text-light">
        <button className="btn btn-light me-2" onClick={() => setCurrentPage("login")}>Login</button>
        <button className="btn btn-light me-2" onClick={() => setCurrentPage("signup")}>Sign Up</button>
        <button className="btn btn-light" onClick={() => setCurrentPage("home")}>Home</button>
      </nav>

      {/* Render the selected page dynamically */}
      {pages[currentPage] || <LoginForm />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
