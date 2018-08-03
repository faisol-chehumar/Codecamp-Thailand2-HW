export const setColor = (color, l) => {
  const initColor = {
    base: `hsl(244, 13%, ${l || 23}%)`,
    highlight: `hsl(341, 100%, ${l || 44}%)`,
    shadow: `hsl(197, 38%, ${l || 13}%)`,
    photon: `hsl(0, 0%, ${l || 100}%)`
  }
  return initColor[color]
}