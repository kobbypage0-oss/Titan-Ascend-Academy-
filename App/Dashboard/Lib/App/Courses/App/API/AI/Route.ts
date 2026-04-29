export async function POST(req: Request) {
  const { question } = await req.json();

  const response = `AI Tutor Response:
  You asked: "${question}"
  Explanation: This topic involves understanding key principles step-by-step.`;

  return Response.json({ answer: response });
}
