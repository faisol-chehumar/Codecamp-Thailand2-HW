export const getColor = (color, l) => {
  const initColor = {
    base: `hsl(240, 2%, ${l || 15}%)`,
    highlight: `hsl(341, 100%, ${l || 44}%)`,
    shade: `hsl(197, 38%, ${l || 13}%)`,
    photon: `hsl(197, 38%, ${l || 100}%)`
  }
  return initColor[color]
}
// Write function that controll lightness
// https://github.com/SaraVieira/styled-loaders/blob/master/src/utils/defaults.js
// export const lightness = (hslColor, lightness) => {
//   return
// }