import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addCourse(course: any) {
  await addDoc(collection(db, "courses"), course);
}

export async function getCourses() {
  const snapshot = await getDocs(collection(db, "courses"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
