import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yberitubvawarlyuctec.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZXJpdHVidmF3YXJseXVjdGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MDU3MTMsImV4cCI6MjAzNjI4MTcxM30.kQ34oBnTCSlTEKK129u6yGUJ2yLpVJaLA3k8R-_C58s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
