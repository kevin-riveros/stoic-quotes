import QuotesData from "@/quotes/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    const randomQuote =
      QuotesData[Math.floor(Math.random() * QuotesData.length)];
    res.status(200).json({ ok: true, randomQuote });
  } else {
    res.status(503).json({ ok: false });
  }
}
