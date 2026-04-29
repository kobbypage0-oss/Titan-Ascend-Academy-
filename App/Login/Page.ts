"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
  };

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login / Signup</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button>
    </div>
  );
}
