import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Navbar from "./components/NavBar"; 
import Login from "./pages/Login";
import UserPage from "./pages/Courses";
import Signup from "./pages/Signuppage";
import Adminpanel from "./pages/Adminpanel";
import Profile from "./components/Profile";
import StaffRegister from "./pages/StaffRegister";
import Admin from "./assets/admin/admin";
import Header from "./assets/admin/Header";
import Sidebar from "./assets/admin/Sidebar";
import Adminhome from "./assets/admin/adminhome";
import Thankyou from "./pages/Thankyou";
import UCourses from "./User/Ucourses";
import UserDashboard from "./User/UserDashboard";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminedit" element={<UserPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/adminpanel" element={<Adminpanel/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminhome" element={<Adminhome/>}/>
        <Route path="/head" element={<Header/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
        <Route path="/staffregister" element={<StaffRegister/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
        <Route path="/Ucourse" element={<UCourses/>}/>
        <Route path="/userdashboard" element={<UserDashboard/>}/>

      </Routes>
    </Router>
  );
}

export default App;