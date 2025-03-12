// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //import { Routes, Route,Router } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
 
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }
 
// export default App;
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("signup"); // Start with Signup

  return (
    <div>
      {currentPage === "signup" && <SignupForm setCurrentPage={setCurrentPage} />}
      {currentPage === "login" && <LoginForm setCurrentPage={setCurrentPage} />}
      {currentPage === "home" && <HomePage />}
    </div>
  );
};

export default App;
