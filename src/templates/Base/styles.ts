import styled from 'styled-components'

import * as HeaderStyles from 'components/Navbar/styles'

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  ${HeaderStyles.Wrapper} {
    width: 100%;
    margin-bottom: 3.2rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
  }
`
