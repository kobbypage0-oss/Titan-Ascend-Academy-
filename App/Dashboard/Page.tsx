"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (!u) {
        window.location.href = "/login";
      } else {
        setUser(u);
      }
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome {user.email}</h2>
      <p>Skill Score: 72</p>
    </div>
  );
}
