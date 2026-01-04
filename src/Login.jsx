import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      setMessage(`Welcome ${username}, Login Successful`);
    } else {
      setMessage("Invalid Password. Login Failed");
    }
  };

  return (
    <div className="card">
      <h2 className="title">LOGIN</h2>

      <input
        className="input"
        type="text"
        placeholder="USERNAME"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={handleLogin}>
        SIGN IN
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
