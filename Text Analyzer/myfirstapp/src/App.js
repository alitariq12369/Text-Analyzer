import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Alert alert="This is alert" /> */}
      <div className="container my-3">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/About" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/TextForm" element={<TextForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
