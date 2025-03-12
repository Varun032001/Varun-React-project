// import React from "react";
// import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const HomePage = ({ setCurrentPage }) => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">College Management</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link onClick={() => setCurrentPage("signup")}>Sign Up</Nav.Link>
//               <Nav.Link onClick={() => setCurrentPage("login")}>Login</Nav.Link>
//               <Nav.Link onClick={() => setCurrentPage("home")}>Home</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className="mt-5 text-center">
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <h1>Welcome to College Management</h1>
//             <p className="lead">This is a simple home page of College Management.</p>
//             <Button variant="primary" size="lg" onClick={() => setCurrentPage("signup")}>
//               Get Started
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand href="#">College Management</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5 text-center">
        <h1>Welcome to College Management</h1>
        <p className="lead">Manage student and faculty data easily.</p>
      </Container>
    </>
  );
};

export default HomePage;

