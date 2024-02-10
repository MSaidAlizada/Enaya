import Home from "./components/Home/Home";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Search from "./components/Search/Search";
import Patient from "./components/Patient/Patient";
import Patient2 from "./components/Patient/Patient2";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/patient/1" element={<Patient />} />
          <Route path="/patient/2" element={<Patient2/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
