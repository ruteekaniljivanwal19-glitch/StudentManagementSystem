import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { setToken } from "../auth/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const navigate = useNavigate();

  const validate = () => {
    const err: typeof errors = {};

    if (!username.trim()) err.username = "Username is required";
    if (!password.trim()) err.password = "Password is required";
    else if (password.length < 4) err.password = "Min 4 characters required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await loginUser({ username, password });

      if (res.data.success) {
        setToken(res.data.token);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container-fluid vh-100 bg-light d-flex justify-content-center align-items-center">

      <div className="card border-0 shadow-sm" style={{ width: "100%", maxWidth: "340px" }}>

        <div className="card-body p-4">

          <h5 className="text-center fw-bold mb-1">Login</h5>
          <p className="text-center text-muted mb-3" style={{ fontSize: "12px" }}>
            Enter your credentials
          </p>

          <form onSubmit={handleLogin}>

            {/* Username */}
            <div className="mb-2">
              <input
                className={`form-control form-control-sm ${errors.username ? "is-invalid" : ""}`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <input
                type="password"
                className={`form-control form-control-sm ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary btn-sm w-100">
              Login
            </button>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Login;