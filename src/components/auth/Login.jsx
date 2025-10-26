import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    
    const { employees, admin , logInUser } = useContext(AuthContext);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      const emp = employees?.find(
        (u) => u.email === email && u.password === password
      );
      const ad = admin?.find(
        (u) => u.email === email && u.password === password
      );
      
      setEmail("");
        setPassword("");
      if (emp) {
        logInUser(emp);
        navigate("/employee");
      } else if (ad) {
        logInUser(ad);
        navigate("/admin");
      } else {
        alert("Invalid credentials!");
      }
    };
  return (
    <div className="login-container">
      <h3>Login</h3>

      <div className="login-inputs">
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            type="password"
            placeholder="Please enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
