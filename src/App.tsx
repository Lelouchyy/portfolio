import "./App.css";
import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./sections/home";
import Expertise from "./sections/expertise";
import Project from "./sections/project";
import CV from "./sections/cv";
import Contact from "./sections/contact";
function App() {
  return (
    <div className="min-h-screen bg-[#080810]">
      <CustomCursor />
      <div className="page-shell">
        <Navbar />
        <Home />
        <Expertise />
        <Project />
        <CV />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
