import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export async function logClinicalHours(data: any) {
  await addDoc(collection(db, "clinical_hours"), data);
}

export async function getUserClinicalHours(userId: string) {
  const q = query(collection(db, "clinical_hours"), where("userId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
