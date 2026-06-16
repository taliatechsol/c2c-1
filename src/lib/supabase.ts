import { createClient } from '@supabase/supabase-js';

// Fallback values to prevent build-time crashes during Vercel's static generation phase
// if the environment variables are not yet loaded.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
