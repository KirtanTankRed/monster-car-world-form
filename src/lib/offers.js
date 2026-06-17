export const OFFERS = [
  {
    id: 1, name: 'Shield & Shine Deal', logo: '/logos/alien-world.png',
    details: { saving: '₹41,010', final: '₹88,990', perks: ['Full Car AW Damping included', 'Ceramic Coating — FREE'] },
  },
  {
    id: 2, name: 'Silver Collection', logo: '/logos/alien-world.png',
    details: { saving: '₹15,510', final: '₹39,490', perks: ['Alphard Android 900 Pro + Component Speaker', 'AHD Reverse Camera — FREE'] },
  },
  {
    id: 3, name: 'Gold Collection', logo: '/logos/alien-world.png',
    details: { saving: '₹10,010', final: '₹59,990', perks: ['Component Speaker + Subwoofer 8" + V3 DSP', 'Charger + AW Perfume — FREE'] },
  },
  {
    id: 4, name: 'Platinum Collection', logo: '/logos/alien-world.png',
    details: { saving: '₹30,010', final: '₹1,09,990', perks: ['6 Channel DSP + Midrange + Pillar Pod', 'Compressor + AW Perfume — FREE'] },
  },
  {
    id: 5, name: 'Diamond Collection', logo: '/logos/alien-world.png',
    details: { saving: '₹23,990', final: '₹74,990', perks: ['4 Channel Amplifier + V3 DSP + Subwoofer 8"', 'Full AW Damping + Perfume — FREE'] },
  },
  {
    id: 6, name: 'Monster Exclusive', logo: '/logos/alien-world.png',
    details: { saving: '₹40,010', final: '₹2,19,990', perks: ['AW 3 Way 10" Subwoofer + Fabrication', 'Full Car Damping — FREE'] },
  },
  {
    id: 7, name: 'Audio Detailing Special', logo: '/logos/alien-world.png',
    details: { saving: '₹1,00,000', final: '₹7,49,990', perks: ['Full Car Acoustic Damping included', 'Colour PPF / Clear PPF — FREE'] },
  },
  {
    id: 8, name: 'Big Car Colour PPF', logo: '/logos/pearl-maxx.png',
    details: { saving: '₹14,000', final: '₹1,26,000', perks: ['5 Year Colour Warranty', '8 Year PPF Warranty'] },
  },
  {
    id: 9, name: 'Small Car Colour PPF', logo: '/logos/pearl-maxx.png',
    details: { saving: '₹13,000', final: '₹1,17,000', perks: ['5 Year Colour Warranty', '8 Year PPF Warranty'] },
  },
  {
    id: 10, name: 'Transparent PPF', logo: '/logos/pearl-maxx.png',
    details: { saving: 'Up to ₹8,700', final: 'From ₹69,300', perks: ['6 Year or 8 Year PPF Warranty', '10% off on all variants'] },
  },
  {
    id: 11, name: 'Anti Yellow PPF', subtitle: 'Only for White Cars', logo: '/logos/pearl-maxx.png',
    details: { saving: '₹12,000', final: '₹1,08,000', perks: ['Exclusively for White Cars', '8 Year PPF Warranty'] },
  },
  {
    id: 12, name: 'Ceramic Coating Offers', subtitle: 'Made in Australia', logo: '/logos/kovalent.png',
    details: { saving: 'Up to ₹5,000', final: 'From ₹9,000', perks: ['1 to 5 Year Coating Plans available', 'Up to 4 Free Maintenance Services'] },
  },
  {
    id: 13, name: 'VNXT Seat Cover', subtitle: 'Small Car / Big Car (7–8 Seater)', logo: '/logos/vnxt.png',
    details: { saving: 'Up to ₹1,690', final: 'From ₹12,510', perks: ['Premium Quality Seat Covers', '10% off — Today only'] },
  },
]

export function pickRandomOffer() {
  return OFFERS[Math.floor(Math.random() * OFFERS.length)]
}
