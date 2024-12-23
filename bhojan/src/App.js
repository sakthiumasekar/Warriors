import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";


function App() {
  
  return (
    <Router>
    <Routes>
      
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
  </Router>
  
  );
}

export default App;
