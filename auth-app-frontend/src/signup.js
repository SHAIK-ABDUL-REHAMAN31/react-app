import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignUp = async () => {
    const response = await axios.post("http://localhost:3000/signup", {
      username,
      email,
      password,
    });
    setUsername("");
    setEmail("");
    setpassword("");
    if (response.data) {
      alert("Signup Successful please signin now");
    } else {
      alert("Signup Failed , please try again");
    }
    console.log(response.data);
  };
  return (
    <div className="Container">
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={username}
        type="password"
        placeholder="usename"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={() => handleSignUp()}>Submit</button>
    </div>
  );
}
