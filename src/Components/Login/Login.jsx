import React, { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = fakeAuthentication(username, password);

      if (response.success) {
        // Successful login
        console.log("Logged in successfully");
        navigate('/dashboard');
      } else {
        // Failed login
        setLoginError("Invalid username or password");
      }
    }
  };

  const fakeAuthentication = (username, password) => {

    const lowercaseUsername = username.toLowerCase();
    // Replace these with your predefined usernames and passwords
    const predefinedUsers = [
      { username: "20CS095", password: "190202" },
      { username: "20CS047", password: "150202" },
      { username: "20CS014", password: "240502" },
      // Add more predefined users here
    ];

    const user = predefinedUsers.find(
        (user) => user.username.toLowerCase() === lowercaseUsername && user.password === password
      );

    return {
      success: !!user,
    };
  };

  return (
    <div className="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="Opigs.png" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Login Page</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                    id="floatingUsername"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="floatingUsername">Username</label>
                  {usernameError && <div className="invalid-feedback">{usernameError}</div>}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                {loginError && <div className="alert alert-danger">{loginError}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
