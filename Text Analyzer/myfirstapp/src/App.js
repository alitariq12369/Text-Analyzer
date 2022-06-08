import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
function App() {
  return (
    <>
      <Navbar />
      <Alert  alert="This is alert"/>
      <div className="container my-3">
        <About/>
<TextForm/>
      </div>

      
    </>
  );
}

export default App;
