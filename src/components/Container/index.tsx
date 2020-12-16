import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 12.8rem auto 3.2rem auto;
    display: grid;
    grid-template-columns: 76.6rem 29rem;
    gap: 4rem;
    position: relative;
    width: 100%;
    max-width: ${theme.grid.container};
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
