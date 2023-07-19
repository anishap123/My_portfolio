import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Sidebar from "./component/Sidebar";
import ProfileCard from "./component/ProfileCard";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <div className="overflow-x-hidden bg-[#bcbcbc] h-screen">
        <div className="flex ">
          <Sidebar />
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
