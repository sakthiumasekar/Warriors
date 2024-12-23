import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import SignIn from './components/SignIn';
function App() {
  return (
    <>

    <Router>
        <Routes>
          <Route path="/" element={<SignIn/> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router >
   </>
  );
}

export default App;
