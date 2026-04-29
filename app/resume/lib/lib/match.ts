export function smartMatch(student: any, job: any) {
  let score = 0;

  if (student.skillScore > 70) score += 50;

  if (job.requirements.includes(student.course)) score += 50;

  return score; // 0–100 match score
}
