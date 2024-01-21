import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fobpsrfobckzvloujtsa.supabase.co"

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvYnBzcmZvYmNrenZsb3VqdHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NjYyOTksImV4cCI6MjAyMTM0MjI5OX0.V4CgYaUxM1wLEvFNwftb7bT_LjD01A2t6e7Ktk3XdbY";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
