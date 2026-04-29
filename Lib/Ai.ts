export async function askTutor(question: string) {
  const res = await fetch("/api/ai", {
    method: "POST",
    body: JSON.stringify({ question }),
  });

  return res.json();
}
