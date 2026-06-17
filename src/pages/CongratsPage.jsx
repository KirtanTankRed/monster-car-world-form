import { useEffect, useRef } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Footer from '../components/Footer'

function Coupon({ offer }) {
  return (
    <div className="animate-bounce-in w-full max-w-sm">
      {/* Coupon outer */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-white/10">
        {/* Top strip */}
        <div className="bg-black px-6 pt-5 pb-4 text-center">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full mx-auto mb-2 border border-white/20 object-cover" />
          <p className="text-white text-[10px] tracking-[0.25em] uppercase font-semibold opacity-70">Monster The Car World</p>
          <p className="text-white/50 text-[9px] tracking-widest mt-0.5">EXCLUSIVE OFFER COUPON</p>
        </div>

        {/* Divider with notches */}
        <div className="relative flex items-center">
          <div className="absolute -left-3 w-6 h-6 bg-black rounded-full" />
          <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-3" />
          <div className="absolute -right-3 w-6 h-6 bg-black rounded-full" />
        </div>

        {/* Offer body */}
        <div className="bg-white px-6 py-6 text-center">
          <p className="text-black/40 text-[10px] uppercase tracking-widest font-semibold mb-3">You've won</p>

          <div className="flex items-center justify-center mb-3 px-4">
            <img
              src={offer.logo}
              alt="Partner logo"
              className="h-14 max-w-[180px] object-contain"
            />
          </div>

          <h2 className="text-black text-xl font-black uppercase tracking-wide leading-tight">
            {offer.name}
          </h2>
          {offer.subtitle && (
            <p className="text-black/50 text-xs mt-1 italic">{offer.subtitle}</p>
          )}

          {/* Offer details */}
          {offer.details && (
            <div className="mt-4 w-full">
              <div className="flex items-center justify-center gap-4 bg-black/4 rounded-xl px-3 py-2.5 mb-2">
                <div className="text-center">
                  <p className="text-[8px] text-black/40 uppercase tracking-wider mb-0.5">You Save</p>
                  <p className="text-green-600 font-black text-sm leading-none">{offer.details.saving}</p>
                </div>
                <div className="w-px h-8 bg-black/10" />
                <div className="text-center">
                  <p className="text-[8px] text-black/40 uppercase tracking-wider mb-0.5">Special Price</p>
                  <p className="text-black font-black text-sm leading-none">{offer.details.final}/-</p>
                </div>
              </div>
              <div className="space-y-1">
                {offer.details.perks.map((perk, i) => (
                  <p key={i} className="text-[10px] text-black/55 text-center">✓ {perk}</p>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 py-2 px-4 bg-black/5 rounded-lg inline-block">
            <p className="text-black/40 text-[9px] uppercase tracking-widest">Valid at</p>
            <p className="text-black text-xs font-bold tracking-wide mt-0.5">Monster The Car World</p>
          </div>
        </div>

        {/* Divider with notches */}
        <div className="relative flex items-center">
          <div className="absolute -left-3 w-6 h-6 bg-black rounded-full" />
          <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-3" />
          <div className="absolute -right-3 w-6 h-6 bg-black rounded-full" />
        </div>

        {/* Footer strip */}
        <div className="bg-black px-6 py-4 text-center">
          <p className="text-white/30 text-[9px] tracking-widest uppercase">Present this coupon at the counter</p>
        </div>
      </div>
    </div>
  )
}

export default function CongratsPage() {
  const { state } = useLocation()
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const end = Date.now() + 3500

    const colors = ['#ffffff', '#cccccc', '#888888', '#444444', '#f0f0f0']

    function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }

    // Big burst first
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    })

    setTimeout(frame, 300)
  }, [])

  if (!state?.offer) return <Navigate to="/" replace />

  const { offer, name } = state

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Congrats header */}
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-4xl mb-3">🎉</p>
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
          Congratulations!
        </h1>
        {name && (
          <p className="text-white/50 text-sm mt-2">
            Hey <span className="text-white font-semibold">{name}</span>, here's your exclusive offer
          </p>
        )}
      </div>

      {/* Coupon */}
      <Coupon offer={offer} />

      {/* Urgency + CTA */}
      <div className="w-full max-w-sm mt-6 animate-slide-up">
        {/* Urgency banner */}
        <div className="bg-red-600/20 border border-red-500/50 rounded-2xl px-4 py-3 text-center mb-4 animate-pulse-glow">
          <p className="text-red-400 text-xs font-black uppercase tracking-widest">⚠️ Offer valid TODAY only</p>
          <p className="text-white/70 text-xs mt-1">Hurry! Grab this deal while it lasts.</p>
        </div>

        {/* CTA prompt */}
        <p className="text-white/60 text-xs text-center mb-3 font-medium">
          📲 Call or WhatsApp us <span className="text-white font-bold">immediately</span> to confirm your offer
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="tel:+918866774656"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-black text-sm uppercase tracking-wide py-4 rounded-2xl active:scale-95 transition-all hover:bg-white/90 shadow-lg shadow-white/10"
          >
            <span className="text-lg">📞</span> Call Now
          </a>
          <a
            href={`https://wa.me/918866774656?text=${encodeURIComponent(`Hey Monster Team! 👋\n\nI'm ${name || 'a customer'} and I just received an exclusive offer coupon for *${offer.name}*.\n\nI'd like to confirm and avail this offer. Please let me know the next steps!\n\nThank you 🙏`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-black text-sm uppercase tracking-wide py-4 rounded-2xl active:scale-95 transition-all hover:bg-green-400 shadow-lg shadow-green-500/20"
          >
            <span className="text-lg">💬</span> WhatsApp
          </a>
        </div>

        <p className="text-white/20 text-[10px] text-center mt-4">
          * Terms &amp; Conditions apply
        </p>
      </div>

      <Footer />
    </div>
  )
}
