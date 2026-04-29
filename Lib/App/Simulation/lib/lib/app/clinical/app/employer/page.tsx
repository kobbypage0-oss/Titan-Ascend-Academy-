"use client";

import { useState } from "react";

export default function Employer() {
  const [students] = useState([
    { name: "John Doe", skill: 82, course: "Respiratory Therapy" },
    { name: "Jane Smith", skill: 91, course: "HVAC" },
  ]);

  return (
    <div>
      <h2>Employer Dashboard</h2>

      {students.map((s, i) => (
        <div key={i}>
          <h3>{s.name}</h3>
          <p>Skill Score: {s.skill}</p>
          <p>Program: {s.course}</p>

          <button>Hire</button>
        </div>
      ))}
    </div>
  );
}
