import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;

    .react-tabs {
      -webkit-tap-highlight-color: transparent;
    }

    .react-tabs__tab-list {
      border-bottom: 0.1rem solid ${theme.colors.gray};
      margin: 0 0 ${theme.spacings.large};
      padding: 0;
    }

    .react-tabs__tab {
      width: 24rem;
      height: 4rem;
      display: inline-block;
      border: 0.1rem solid ${theme.colors.gray};
      color: ${theme.colors.black};
      background: ${theme.colors.white};
      text-align: center;
      border-bottom: 0.1rem solid ${theme.colors.gray};
      bottom: -1.2rem;
      position: relative;
      list-style: none;
      padding: ${theme.spacings.xsmall} 0;
      cursor: pointer;

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      text-transform: uppercase;
    }

    .react-tabs__tab--selected {
      width: 24rem;
      height: 5rem;
      bottom: 0;
      border: none;
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
      background: ${theme.colors.blue};
      color: ${theme.colors.white};
    }

    .react-tabs__tab--disabled {
      cursor: default;
    }

    .react-tabs__tab:focus {
      box-shadow: 0 0 5px hsl(208, 99%, 50%);
      border-color: hsl(208, 99%, 50%);
      outline: none;
    }

    .react-tabs__tab:focus:after {
      content: '';
      position: absolute;
      height: 5px;
      left: -4px;
      right: -4px;
      bottom: -5px;
      background: #fff;
    }

    .react-tabs__tab-panel {
      display: none;
    }

    .react-tabs__tab-panel--selected {
      display: block;
    }
  `}
`
