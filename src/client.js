import { createClient } from '@supabase/supabase-js'

const URL = 'https://wohgpnhpxzbbebxbybhu.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvaGdwbmhweHpiYmVieGJ5Ymh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzkwMjAsImV4cCI6MjA0NjM1NTAyMH0.TAByDDLy2jtd6kJSs2PeKHRsYMTaw-4BwY11xQA89a4';

export const supabase = createClient(URL, API_KEY);