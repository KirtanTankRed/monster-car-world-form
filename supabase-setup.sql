-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor > New query)

create table if not exists submissions (
  id          uuid        primary key default gen_random_uuid(),
  full_name   text        not null,
  phone       text        not null,
  address     text        not null,
  offer       text        not null,
  created_at  timestamptz not null default now()
);

-- Allow anyone (QR form users) to insert submissions
alter table submissions enable row level security;

create policy "Anyone can insert"
  on submissions for insert
  to anon
  with check (true);

-- Allow anyone to read (admin page uses the anon key)
-- Note: the admin page is protected by a client-side password.
-- If you want stricter security, replace this with a service-role read
-- and move admin fetching to a Supabase Edge Function.
create policy "Anyone can read"
  on submissions for select
  to anon
  using (true);
