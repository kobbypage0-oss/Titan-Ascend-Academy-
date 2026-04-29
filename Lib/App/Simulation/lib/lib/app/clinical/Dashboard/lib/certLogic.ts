import { issueCertificate } from "./certificates";

export async function checkAndIssueCertificate(userId: string) {
  // Mock rule (upgrade later)
  const completed = true;

  if (completed) {
    await issueCertificate({
      userId,
      courseId: "respiratory",
      courseTitle: "Respiratory Therapy",
      hoursCompleted: 120,
      issuedAt: new Date().toISOString(),
      certificateId: "CERT-" + Date.now(),
      verified: true,
    });
  }
}
