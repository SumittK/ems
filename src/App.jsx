import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import { use, useEffect } from "react";
import { setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  // }, []);
  return (
    <Router>
      <Routes>
        {/* 👇 Login page route */}
        <Route path="/" element={<Login />} />

        {/* 👇 Employee dashboard route */}
        <Route path="/employee" element={<EmployeeDashboard />} />

        {/* 👇 Admin dashboard route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
