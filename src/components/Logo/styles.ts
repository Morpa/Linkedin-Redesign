import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  hideText: () => css`
    .text {
      display: none;
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ hideText }) => css`
    width: 6rem;
    height: 8rem;

    ${!!hideText && wrapperModifiers.hideText};
  `}
`
