import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <input
        type="password"
        placeholder="please enter pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/> <br />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      <br /> <br />
    </div>
  );
};

export default Login;
