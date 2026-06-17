import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

function formatDate(ts) {
  if (!ts) return '—'
  return new Date(ts).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  })
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [pwError, setPwError] = useState('')
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState('')
  const [search, setSearch] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthed(true)
    } else {
      setPwError('Incorrect password')
    }
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        setLoading(false)
        if (error) { setFetchError('Failed to load data.'); return }
        setRows(data || [])
      })
  }, [authed])

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img src="/logo.jpg" alt="Logo" className="w-16 h-16 rounded-full mx-auto mb-4 border border-white/20 object-cover" />
            <h1 className="text-xl font-black text-white uppercase tracking-widest">Admin Panel</h1>
            <p className="text-white/30 text-xs mt-1 tracking-wide">Monster The Car World</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setPwError('') }}
                placeholder="Enter admin password"
                autoFocus
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all focus:border-white/50
                  ${pwError ? 'border-red-500/70' : 'border-white/15'}`}
              />
              {pwError && <p className="text-red-400 text-xs mt-1">{pwError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold text-sm uppercase tracking-widest py-3 rounded-xl hover:bg-white/90 active:scale-95 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  const filtered = rows.filter(r =>
    r.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    r.phone?.includes(search) ||
    r.offer?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-white/20 object-cover" />
            <div>
              <h1 className="text-lg font-black text-white uppercase tracking-widest">Admin Panel</h1>
              <p className="text-white/30 text-xs">Monster The Car World</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-xs">{rows.length} record{rows.length !== 1 ? 's' : ''}</span>
            <button
              onClick={() => setAuthed(false)}
              className="text-xs border border-white/20 text-white/50 px-3 py-1.5 rounded-lg hover:border-white/40 hover:text-white/80 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, phone or offer…"
            className="w-full sm:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-sm outline-none focus:border-white/30 transition-all"
          />
        </div>

        {/* Table */}
        {loading && <p className="text-white/30 text-sm py-10 text-center">Loading…</p>}
        {fetchError && <p className="text-red-400 text-sm py-10 text-center">{fetchError}</p>}

        {!loading && !fetchError && (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">#</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">Full Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">Phone</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">Address</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">Offer</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center text-white/20 py-10 text-sm">
                      {search ? 'No results found.' : 'No submissions yet.'}
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <tr key={row.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="px-4 py-3 text-white/30 text-xs">{i + 1}</td>
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{row.full_name}</td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{row.phone}</td>
                      <td className="px-4 py-3 text-white/60 max-w-[200px] truncate" title={row.address}>{row.address}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="inline-block bg-white/10 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          {row.offer}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white/40 text-xs whitespace-nowrap">{formatDate(row.created_at)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
