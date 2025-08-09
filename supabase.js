// supabase.js
// ⚠️ Tukar URL & anon key ikut project Supabase kau
const SUPABASE_URL = 'https://sfscvzzymtblukdupiyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmc2N2enp5bXRibHVrZHVwaXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3Mjg2NDAsImV4cCI6MjA3MDMwNDY0MH0.ELGQZckmEnD8QBC4b5rUl9f9l_QKiOykxwQ7DPGOy08';

const { createClient } = supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
