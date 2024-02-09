import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
