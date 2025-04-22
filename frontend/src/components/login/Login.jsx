import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; // Import useAuth

const Login = () => {
  const { login } = useAuth(); // Use global login function
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        login(data.token); // ✅ Set token in context
        localStorage.setItem("token", data.token); // ✅ Set token in localStorage
        localStorage.setItem("user", JSON.stringify(data.user || { id: data.userId, name: "Guest" }));

        alert("Login successful!");
        navigate("/"); // Redirect to home after login
        window.location.reload(); // Ensures `Navbar` updates immediately
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          <a href="/register">Don't have an account? Click to create one</a>
        </p>
      </form>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
};

export default Login;
  
  