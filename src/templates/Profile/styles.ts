import styled, { css } from 'styled-components'

import * as AvatarStyles from 'components/Avatar/styles'

export const ContentLeft = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 36rem;
    position: relative;
    background: ${theme.colors.white};

    ${AvatarStyles.Wrapper} {
      position: absolute;
      bottom: ${theme.spacings.xlarge};
      left: ${theme.spacings.small};
    }
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: cover;
  background-size: cover;
`

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    width: 95%;
    position: absolute;
    top: 1.2rem;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > button + button {
        margin-left: ${theme.spacings.small};
      }
    }
  `}
`

export const ContentProfile = styled.div`
  ${({ theme }) => css`
    width: 55rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    margin: ${theme.spacings.large} ${theme.spacings.large}
      ${theme.spacings.xlarge} 20rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    position: relative;
    padding-bottom: ${theme.spacings.xxsmall};
    border-bottom: 0.1rem solid ${theme.colors.gray};

    img {
      margin-left: ${theme.spacings.xxxsmall};
    }

    a {
      color: ${theme.colors.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const Location = styled.div`
  ${({ theme }) => css`
    display: flex;

    > p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      margin-left: ${theme.spacings.xxxsmall};
    }

    > svg {
      width: 1.6rem;
      height: 1.6rem;
      color: ${theme.colors.blue};
      fill: ${theme.colors.blue};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const GroupButtons = styled.div`
  width: 35.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tabs = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.large};
  `}
`

export const ContentRight = styled.div``

const ContainerRight = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 36rem;
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const Dashboard = styled(ContainerRight)`
  ${({ theme }) => css`
    strong {
      font-size: ${theme.font.sizes.huge};
      color: ${theme.colors.blue};
      padding-top: ${theme.spacings.small};
    }

    span {
      font-size: 1.8rem;
      line-height: ${theme.font.sizes.xlarge};
      font-weight: 500;
    }
  `}
`

export const DashTitle = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    padding-bottom: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.gray};

    a {
      color: ${theme.colors.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const VisitorsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const Visitors = styled(ContainerRight)`
  ${({ theme }) => css`
    div {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      align-items: flex-start;
    }
    > div + div {
      margin: 0 0 ${theme.spacings.xxsmall} 0;
    }
  `}
`

export const VisitorInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1.2rem;

    strong {
      font-size: ${theme.font.sizes.small};
    }

    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CoursesTitle = styled(Title)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    justify-content: center;
    text-transform: uppercase;
  `}
`

export const Courses = styled(Visitors)`
  ${({ theme }) => css`
    text-transform: uppercase;

    img {
      border-radius: ${theme.border.radius};
    }

    > a {
      font-weight: 600;
      color: ${theme.colors.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`
