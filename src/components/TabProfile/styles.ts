import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.medium};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.xxxsmall};
  `}
`

export const SeeMore = styled.h4`
  ${({ theme }) => css`
    width: fit-content;
    margin-top: 1.2rem;
    padding: ${theme.spacings.small} 0;
    font-size: 1.4rem;
    color: ${theme.colors.blue};
    cursor: pointer;
    text-transform: uppercase;
  `}
`

export const About = styled(Section)``

export const DescriptionAbout = styled.div`
  height: '4.2rem';
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Projects = styled(Section)``

export const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Card = styled.div`
  ${({ theme }) => css`
    width: 23rem;
    height: 21.6rem;

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.small};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    > img {
      width: 100%;
    }
  `}
`

export const Skills = styled(Section)``

export const CardsSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardSkills = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 18rem;
    height: 7.2rem;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.doubleRadius};

    strong {
      width: 100%;
      padding: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;

      > span {
        color: ${theme.colors.blue};
      }
    }
  `}
`

export const Experience = styled(Section)``

const listInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const infoItem = css`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.small} 0;
    margin-bottom: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.gray};

    &:last-child {
      border-bottom: 0;
      margin: 0;
    }
  `}
`

const descriptionItem = css`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;

    > strong {
      font-size: ${theme.font.sizes.medium};
      line-height: 1.2rem;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    > span {
      font-size: 1rem;
      line-height: 1.2rem;
      margin-bottom: 1.2rem;

      > strong {
        color: ${theme.colors.blue};
        margin-left: 1.2rem;
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.spacings.xsmall};
    }
  `}
`

export const List = styled.div`
  ${listInfo}
`

export const Item = styled.div`
  ${infoItem}
`

export const DescriptionItem = styled.div`
  ${descriptionItem}
`

export const Education = styled(Section)`
  ${DescriptionItem} {
    span + strong {
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }
`
