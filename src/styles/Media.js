import { css } from 'styled-components'
import { breakpoints } from './Variables'

export const MQ = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `

  return accumulator
}, {})
