import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignin = async () => {
    const response = await axios.post("http://localhost:3000/signin", {
      email,
      password,
    });
    setEmail("");
    setpassword("");

    const { user } = response.data;
    if (user && user.token) {
      alert(`Signin Successful! Welcome ${user.username}`);
      localStorage.setItem("token", user.token);
      localStorage.setItem("username", user.username);
    } else {
      alert("Signin Failed , please try again");
    }
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
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={() => handleSignin()}>Submit</button>
    </div>
  );
}
