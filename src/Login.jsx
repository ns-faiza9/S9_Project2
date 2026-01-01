import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (password === "admin123") {
            setMessage(`Welcome ${username}, Login Successful`);
        } else {
            setMessage("Invalid Username/Password. Login Failed");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>User Login</h2>

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br/>
            <br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <button onClick={handleLogin}>Login</button>

            <h3>{message}</h3>
        </div>
    );
};

export default Login;
