import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getUserRole(uid: string) {
  const docRef = doc(db, "users", uid);
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    return snap.data().role;
  }

  return null;
}
