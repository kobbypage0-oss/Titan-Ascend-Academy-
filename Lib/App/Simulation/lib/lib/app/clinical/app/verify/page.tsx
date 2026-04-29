"use client";

import { useState } from "react";

export default function Verify() {
  const [id, setId] = useState("");
  const [result, setResult] = useState("");

  const verify = async () => {
    // Later connect to Firestore
    if (id === "CERT-123456") {
      setResult("Valid Certificate ✅");
    } else {
      setResult("Invalid Certificate ❌");
    }
  };

  return (
    <div>
      <h2>Verify Certificate</h2>

      <input onChange={(e) => setId(e.target.value)} />
      <button onClick={verify}>Verify</button>

      <p>{result}</p>
    </div>
  );
}
