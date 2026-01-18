
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://orixtzllataizsmaaqdc.supabase.co'
const supabaseKey = 'sb_publishable_lb0oahT8mo8MahLENaS5jA_KJnW-T8O'

export const supabase = createClient(supabaseUrl, supabaseKey)
