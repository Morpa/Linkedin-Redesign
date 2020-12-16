import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<
  ButtonProps,
  'size' | 'color' | 'border' | 'iconLeft'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};

    > svg {
      height: 2.4rem;
      width: 2.4rem;
      margin: 0;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    width: 13.2rem;
    height: 3.6rem;
    border-radius: ${theme.border.radius};
  `,
  large: (theme: DefaultTheme) => css`
    width: 17rem;
    height: 3.2rem;
    border-radius: ${theme.border.radius};
  `,
  hasBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.blue};
    background: ${theme.colors.white};
    width: 17rem;
    height: 3.2rem;
    border-radius: ${theme.border.radius};

    > small {
      color: ${theme.colors.blue};
    }
  `,

  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};

    > small {
      color: ${theme.colors.black};
    }
  `,

  blue: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};

    > svg {
      color: ${theme.colors.white};
    }

    > small {
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size, border, iconLeft }) => css`
    border: none;
    padding: ${theme.spacings.xxxsmall};
    outline: none;
    line-height: ${theme.spacings.small};
    cursor: pointer;
    transition: 0.1s;

    display: flex;
    flex-direction: ${iconLeft ? 'row-reverse' : ''};
    align-items: center;
    justify-content: space-between;

    > small {
      font-size: ${theme.font.sizes.small};
      flex: 1;
      text-transform: uppercase;
      font-weight: ${theme.font.normal};
    }

    &:hover {
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.98);
    }

    > svg {
      height: 1.6rem;
      width: 1.6rem;
      margin-right: ${theme.spacings.xxsmall};
      margin-left: ${iconLeft ? '0.8rem' : ''};
    }
    ${border && wrapperModifiers.hasBorder(theme)}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers[color](theme)}
  `}
`
