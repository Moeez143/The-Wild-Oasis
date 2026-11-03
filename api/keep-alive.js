import { supabaseKey, supabaseUrl } from "../src/services/supabase.js";

const tables = ["settings", "cabins", "bookings"];

export async function GET(request) {
  const secret = process.env.CRON_SECRET;

  if (!secret || request.headers.get("authorization") !== "Bearer " + secret) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    for (const table of tables) {
      const response = await fetch(
        supabaseUrl + "/rest/v1/" + table + "?select=id&limit=1",
        {
          cache: "no-store",
          headers: {
            apikey: supabaseKey,
            Authorization: "Bearer " + supabaseKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error(table + " query returned HTTP " + response.status);
      }
    }

    return Response.json(
      { ok: true, queries: tables.length },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Supabase keep-alive failed:", error);
    return Response.json(
      { error: "Supabase keep-alive failed" },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }
}