"use client";

import { useEffect, useState } from "react";
import { getCourses } from "@/lib/db";

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((c) => (
        <div key={c.id}>
          <h3>{c.title}</h3>
          <p>{c.category}</p>
        </div>
      ))}
    </div>
  );
}
