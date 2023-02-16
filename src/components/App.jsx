import React, { useState } from "react";

function App() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${username}, Password: ${password}`);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="username"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
