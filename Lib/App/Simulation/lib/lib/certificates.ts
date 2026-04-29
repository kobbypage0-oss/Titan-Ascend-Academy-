import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export async function issueCertificate(data: any) {
  await addDoc(collection(db, "certificates"), data);
}
