import { supabaseKey, supabaseUrl } from "../src/services/supabase.js";

const tables = ["settings", "cabins", "bookings"];

export async function GET() {
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