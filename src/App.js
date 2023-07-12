import { Routes, Route  } from "react-router-dom";
import Main from "./pages/Main";
import './App.css';
import About from "./pages/About";

function App() {
  return (
    <>
    <div className="overflow-x-hidden bg-[#bcbcbc] h-screen">
    <Routes>
    <Route path="/" element ={<Main />} />
    <Route path="/about" element ={<About />} />
      
      

      </Routes>
    </div>
    
    </>
  );
}

export default App;
