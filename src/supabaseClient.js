import { createClient } from '@supabase/supabase-js'

// ⚠️ 직접 주소를 적지 않고, 'VITE_...' 라는 이름표를 찾으라고 시키는 겁니다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)