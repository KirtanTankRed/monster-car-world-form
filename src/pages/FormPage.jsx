import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { pickRandomOffer } from '../lib/offers'

export default function FormPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', phone: '', address: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.address.trim()) e.address = 'Address is required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setSubmitError('')

    const offer = pickRandomOffer()

    const { error } = await supabase.from('submissions').insert({
      full_name: form.fullName.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      offer: offer.name,
    })

    setLoading(false)

    if (error) {
      console.error('Supabase insert error:', error)
      setSubmitError('Something went wrong. Please try again.')
      return
    }

    navigate('/congrats', { state: { offer, name: form.fullName.trim() }, replace: true })
  }

  function handleChange(field) {
    return (e) => {
      setForm(f => ({ ...f, [field]: e.target.value }))
      if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      {/* Logo */}
      <div className="mb-6 animate-fade-in">
        <img
          src="/logo.jpg"
          alt="Monster The Car World"
          className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-1">Welcome to</p>
        <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-white uppercase">
          Monster The Car World
        </h1>
        <p className="text-white/40 text-sm mt-2">Fill in your details to claim your exclusive offer</p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-md animate-slide-up">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur-sm"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={handleChange('fullName')}
              placeholder="Enter your full name"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all focus:border-white/50 focus:bg-white/8
                ${errors.fullName ? 'border-red-500/70' : 'border-white/15'}`}
            />
            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={handleChange('phone')}
              placeholder="+91 98765 43210"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all focus:border-white/50 focus:bg-white/8
                ${errors.phone ? 'border-red-500/70' : 'border-white/15'}`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
              Address
            </label>
            <textarea
              value={form.address}
              onChange={handleChange('address')}
              placeholder="Enter your full address"
              rows={3}
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all focus:border-white/50 focus:bg-white/8 resize-none
                ${errors.address ? 'border-red-500/70' : 'border-white/15'}`}
            />
            {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
          </div>

          {submitError && (
            <p className="text-red-400 text-sm text-center">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all hover:bg-white/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Claiming…' : 'Claim My Offer'}
          </button>
        </form>
      </div>
    </div>
  )
}
