export async function generateResume(user: any) {
  return `
${user.name}
${user.email}

Skills:
${user.skills.join(", ")}

Certifications:
${user.certifications.join(", ")}

Experience:
Completed training in ${user.course}

Summary:
Highly trained candidate with proven hands-on clinical and simulation experience.
`;
}
