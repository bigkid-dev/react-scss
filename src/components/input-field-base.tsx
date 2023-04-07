import React, { useState } from "react";
import "../styles/login.scss";

export const Base = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
  };

  const toggleShow =()=>{
    setShowPassword(!showPassword)
  }

  return (
    <div className="input-base">
      <h3>Welcome!</h3>
      <p>Enter details to login</p>

      <form>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <input
          id="password"
          type={showPassword ? "password" : "text"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <a id="show" onClick={toggleShow}>Show</a>

        <p id="forgot-pass">FORGOT PASSWORD?</p>
        <input id="submit-btn" type="submit" value="LOG IN" />
      </form>
    </div>
  );
};
