export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-4 opacity-40 hover:opacity-70 transition-opacity">
      <span className="text-white text-xs">Made with</span>
      <span className="text-red-500 text-sm">♥</span>
      <span className="text-white text-xs">by</span>
      <img
        src="/redsoft-logo.png"
        alt="RedSoft"
        className="h-4 object-contain"
        style={{ filter: 'invert(1) hue-rotate(180deg)' }}
      />
    </div>
  )
}
