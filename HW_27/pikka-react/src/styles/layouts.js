const _rem = {
  xs: '.3rem',
  sm: '.5rem',
  md: '1rem',
  lg: '2rem'
}

export const setLayout =  {
  widthHeight: (width='100%', height='auto') => `
    width: ${width} 
    height: ${height}
  `,
  marginPadding: (margin='_xs', padding='_md') => `
    display: block
    margin: ${_rem[margin]}
    padding: ${_rem[padding]}
  `,
  flexFlowContentItem: (flow='row wrap', horizonAlign='flex-start', verticleAlign='flex-start') => `
    display: flex
    flex-flow: ${flow}
    justify-content: ${horizonAlign}
    align-items: ${verticleAlign}
    margin: 0
    padding: 0
  `,
  border: (width = 1, opacity = 0.5) => {
    return `${width}px solid rgba(0, 0, 0, ${opacity})`
  }
}
