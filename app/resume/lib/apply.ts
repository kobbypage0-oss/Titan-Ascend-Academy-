import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export async function applyToJob(userId: string, jobId: string) {
  await addDoc(collection(db, "applications"), {
    userId,
    jobId,
    status: "pending",
    appliedAt: new Date().toISOString()
  });
}
