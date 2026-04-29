export function matchStudentToJob(student: any, job: any) {
  return student.skillScore > 70 &&
         job.requirements.includes(student.course);
}
