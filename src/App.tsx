import "./App.css";
import Navbar from "./components/navbar";
import Home from "./sections/home";
import Expertise from "./sections/expertise";
import Project from "./sections/project";
import CV from "./sections/cv";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
      <Expertise />
      <Project />
      <CV />
    </div>
  );
}

export default App;
