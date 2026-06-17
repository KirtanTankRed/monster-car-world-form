export const OFFERS = [
  { id: 1,  name: 'Shield & Shine Deal',              logo: '/logos/alien-world.png' },
  { id: 2,  name: 'Silver Collection',                logo: '/logos/alien-world.png' },
  { id: 3,  name: 'Gold Collection',                  logo: '/logos/alien-world.png' },
  { id: 4,  name: 'Platinum Collection',              logo: '/logos/alien-world.png' },
  { id: 5,  name: 'Diamond Collection',               logo: '/logos/alien-world.png' },
  { id: 6,  name: 'Monster Exclusive',                logo: '/logos/alien-world.png' },
  { id: 7,  name: 'Audio Detailing Special',          logo: '/logos/alien-world.png' },
  { id: 8,  name: 'Big Car Colour PPF',               logo: '/logos/pearl-maxx.png'  },
  { id: 9,  name: 'Small Car Colour PPF',             logo: '/logos/pearl-maxx.png'  },
  { id: 10, name: 'Transparent PPF',                  logo: '/logos/pearl-maxx.png'  },
  { id: 11, name: 'Anti Yellow PPF',     subtitle: 'Only for White Cars', logo: '/logos/pearl-maxx.png' },
  { id: 12, name: 'Ceramic Coating Offers', subtitle: 'Made in Australia', logo: '/logos/kovalent.png'   },
  { id: 13, name: 'VNXT Seat Cover',    subtitle: 'Small Car / Big Car (7–8 Seater)', logo: '/logos/vnxt.png' },
]

export function pickRandomOffer() {
  return OFFERS[Math.floor(Math.random() * OFFERS.length)]
}
