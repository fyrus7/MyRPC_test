// supabase.js
// ⚠️ Tukar URL & anon key ikut project Supabase kau
const SUPABASE_URL = 'https://xxxxxxxxxxxx.supabase.co';
const SUPABASE_KEY = 'YOUR_PUBLIC_ANON_KEY';

const { createClient } = supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
