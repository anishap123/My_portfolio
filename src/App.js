import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Sidebar from "./component/Sidebar";
import ProfileCard from "./component/ProfileCard";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <div className="overflow-x-hidden bg-[#bcbcbc] h-screen">
        <div className="flex flex-col sm:flex-row">
          <Sidebar />
          <Navbar />
          <ProfileCard />

          <Routes>
           
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element= {<Work />} />
           


          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
