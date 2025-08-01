import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yuescfokmtibxzgeepux.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZXNjZm9rbXRpYnh6Z2VlcHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTY2MDEsImV4cCI6MjA2OTM3MjYwMX0.CynpBdfdiNo__E_XLW49nRnd_fj0rnfVJxtxcDY0abg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)