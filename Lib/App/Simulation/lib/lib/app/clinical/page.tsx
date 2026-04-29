"use client";

import { useState } from "react";
import { logClinicalHours } from "@/lib/clinical";
import { auth } from "@/lib/firebase";

export default function Clinical() {
  const [hours, setHours] = useState(0);
  const [notes, setNotes] = useState("");

  const submit = async () => {
    const user = auth.currentUser;

    if (!user) return alert("Not logged in");

    await logClinicalHours({
      userId: user.uid,
      courseId: "respiratory",
      hours,
      date: new Date().toISOString(),
      verified: false,
      supervisorName: "Pending",
      notes,
    });

    alert("Hours submitted!");
  };

  return (
    <div>
      <h2>Log Clinical Hours</h2>

      <input
        type="number"
        placeholder="Hours"
        onChange={(e) => setHours(Number(e.target.value))}
      />

      <textarea
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
