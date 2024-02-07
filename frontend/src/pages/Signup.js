import React, { useState } from "react";
import { useSignup } from "../context/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    signup(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className="signup">
      <h3>Sign Up</h3>

      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Sign Up</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}
