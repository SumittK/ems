import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import { use, useEffect } from "react";
import { setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/employee" element={<EmployeeDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
