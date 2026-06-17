import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ypaaxtqzkfgbkibyyxem.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYWF4dHF6a2ZnYmtpYnl5eGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NzQ5OTUsImV4cCI6MjA5NzI1MDk5NX0.9nqqJ2VcJ0tlUEciwgoQCwTnHmQeJSAYAlevbHWLafw'
)
