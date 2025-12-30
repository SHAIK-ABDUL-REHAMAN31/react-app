import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Signup from "./signup";
import Signin from "./signin";

function App() {
  const [page, setPage] = useState("signin");
  return (
    <div
      style={{ padding: "40px", justifyContent: "center", textAlign: "center" }}
    >
      <h1>Hii , welcome to Auth App </h1>
      <button onClick={() => setPage("signup")}>Sign Up</button>
      <button onClick={() => setPage("signin")}>Sign In</button>

      {page === "signup" ? <Signup /> : <Signin />}
    </div>
  );
}

export default App;
