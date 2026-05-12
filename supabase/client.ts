import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kjwnlrbcgtlppxibejty.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqd25scmJjZ3RscHB4aWJlanR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjUzNjgsImV4cCI6MjA5Mzc0MTM2OH0.6WsmLd2ubsVCyegvXY9CG--ndmEo8ewY57MdJ7hzb94'
  )
}