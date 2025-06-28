import { NextRequest } from "next/server";

export function verifyApiKey(req: NextRequest): boolean {
  const apiKey = req.headers.get("x-api-key");
  const validApiKey = process.env.API_KEY;

  console.log("🔑 Incoming:", apiKey);
  console.log("🔐 Expected:", validApiKey);

  if (!apiKey || apiKey !== validApiKey) {
    return false;
  }

  return true;
}
