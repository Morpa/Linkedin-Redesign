import styled, { css } from 'styled-components'

import * as LogoStyles from 'components/Logo/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    ${LogoStyles.Wrapper} {
      margin-bottom: -3rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: min(100%, 136rem);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.white};

    > svg {
      margin: 0 ${theme.spacings.small};
      cursor: pointer;
    }
  `}
`

export const NavPages = styled.nav`
  ${({ theme }) => css`
    width: 48.2rem;
    height: 100%;
    padding: 0 ${theme.spacings.small};
    border-left: 0.1rem solid ${theme.colors.bg};
    border-right: 0.1rem solid ${theme.colors.bg};
    outline: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const Search = styled.div`
  flex: 1;
`

export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 33rem;
    padding: ${theme.spacings.xsmall};
    border-left: 0.1rem solid ${theme.colors.bg};
    border-right: 0.1rem solid ${theme.colors.bg};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.medium};

    flex-direction: column;
    margin-left: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.black};
    }

    > strong:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    > span {
      display: flex;
      color: ${theme.colors.grayDark};
      font-weight: ${theme.font.bold};
      line-height: ${theme.spacings.medium};

      p {
        color: ${theme.colors.green};
        margin-left: ${theme.spacings.xxxsmall};
        letter-spacing: -0.1rem;

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  `}
`

export const Outher = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xxlarge};
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.large};

    &:hover {
      color: ${theme.colors.blue};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
