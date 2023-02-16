import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { query } from "./db";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const res = await query(
        "SELECT * FROM users WHERE login_id = $1 AND password = $2",
        [loginId, password]
      );
      if (res.rowCount > 0) {
        history.push("/home");
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <div>
      <h1>Property Assessment Pro (PAP)</h1>
      <div>
        <label>Login ID:</label>
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
