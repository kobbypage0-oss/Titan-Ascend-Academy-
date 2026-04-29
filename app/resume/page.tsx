"use client";

import { useState } from "react";
import { generateResume } from "@/lib/resume";

export default function Resume() {
  const [resume, setResume] = useState("");

  const build = async () => {
    const result = await generateResume({
      name: "John Doe",
      email: "john@email.com",
      skills: ["Patient Care", "Oxygen Therapy"],
      certifications: ["Respiratory Therapy"],
      course: "Respiratory Therapy"
    });

    setResume(result);
  };

  return (
    <div>
      <h2>AI Resume Builder</h2>

      <button onClick={build}>Generate Resume</button>

      <pre>{resume}</pre>
    </div>
  );
}
