/* 크놀AD → TypeSafe(Jev) 프록시
   키는 Vercel 환경변수 TYPESAFE_API_KEY 에만 존재 (브라우저 노출 없음)
   사용: POST /api/jev  { state: {...}, questions: {...} }            */
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  // 크놀AD 페이지에서 온 요청만 허용 (외부 남용 방지)
  const src = String(req.headers.origin || req.headers.referer || "");
  if (!/cnolad\.com|vercel\.app|localhost/.test(src))
    return res.status(403).json({ error: "forbidden" });

  const key = process.env.TYPESAFE_API_KEY;
  if (!key) return res.status(500).json({ error: "TYPESAFE_API_KEY not set" });

  const { state, questions } = req.body || {};
  if (!state || !questions)
    return res.status(400).json({ error: "state, questions 필요" });

  try {
    const r = await fetch("https://api.typesafe.ai/v1/systemone", {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({ state, questions, model: "jev-latest" }),
    });
    const j = await r.json().catch(() => ({}));
    return res.status(r.status).json(j);
  } catch (e) {
    return res.status(502).json({ error: "jev upstream 실패", detail: String(e && e.message) });
  }
}
