import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Explore from "./Pages/Explore";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
// import Admin from "./Pages/Admin";
import Admin from "./Pages/Admin2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
