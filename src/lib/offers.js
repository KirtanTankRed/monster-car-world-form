export const OFFERS = [
  { id: 1, name: 'Shield & Shine Deal', emoji: '🛡️' },
  { id: 2, name: 'Silver Collection', emoji: '🥈' },
  { id: 3, name: 'Gold Collection', emoji: '🥇' },
  { id: 4, name: 'Platinum Collection', emoji: '💿' },
  { id: 5, name: 'Diamond Collection', emoji: '💎' },
  { id: 6, name: 'Monster Exclusive', emoji: '👑' },
  { id: 7, name: 'Audio Detailing Special', emoji: '🔊' },
  { id: 8, name: 'Big Car Colour PPF', emoji: '🚙' },
  { id: 9, name: 'Small Car Colour PPF', emoji: '🚗' },
  { id: 10, name: 'Transparent PPF', emoji: '✨' },
  { id: 11, name: 'Anti Yellow PPF', subtitle: 'Only for White Cars', emoji: '🤍' },
  { id: 12, name: 'Ceramic Coating Offers', subtitle: 'Made in Australia', emoji: '🌏' },
  { id: 13, name: 'VNXT Seat Cover', subtitle: 'Small Car / Big Car (7–8 Seater)', emoji: '🪑' },
]

export function pickRandomOffer() {
  return OFFERS[Math.floor(Math.random() * OFFERS.length)]
}
