import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 25rem;
    background: ${theme.colors.bg};
    padding: ${theme.spacings.medium} 0;
    border-top: 0.1rem solid ${theme.colors.gray};
  `}
`

export const Content = styled.div`
  width: min(100%, 111rem);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.small};
  `}
`
export const Navigation = styled.div`
  width: 48.9rem;
  height: 15.5rem;
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  list-style: none;
  column-count: 3;
`

export const LinkWrapper = styled.li`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    a {
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
      transition: 0.1s;

      &:hover {
        font-weight: ${theme.font.bold};
      }
    }
  `}
`

export const FastAcecces = styled.div`
  margin-right: ${({ theme }) => theme.spacings.xlarge};

  button {
    margin-bottom: 1.2rem;
  }
`

export const Language = styled.div`
  ${({ theme }) => css`
    select {
      width: 27rem;
      height: 3.2rem;
      border: 1px solid ${theme.colors.gray};
      border-radius: ${theme.border.radius};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      outline: none;
      color: ${theme.colors.blue};

      option {
        font-weight: ${theme.font.light};
        color: ${theme.colors.black};
      }
    }
  `}
`
