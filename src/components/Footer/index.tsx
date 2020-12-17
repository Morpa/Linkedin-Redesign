import Link from 'next/link'
import { Settings, HelpCircle } from '@styled-icons/feather'

import Logo from 'components/Logo'
import Button from 'components/Button'

import * as S from './styles'

type LinkProps = {
  title: string
  link: string
}

export type FooterProps = {
  links: LinkProps[]
}

const Footer = ({ links }: FooterProps) => (
  <S.Wrapper>
    <S.Content>
      <Logo />

      <S.Navigation>
        <S.Title>Navigation</S.Title>
        <S.List>
          {links.map((link) => (
            <S.LinkWrapper key={link.title}>
              <Link href={link.link}>
                <a>{link.title}</a>
              </Link>
            </S.LinkWrapper>
          ))}
        </S.List>
      </S.Navigation>

      <S.FastAcecces>
        <S.Title>Fast acecces</S.Title>
        <Button color="blue" icon={<HelpCircle />} size="large" iconLeft>
          Questions?
        </Button>
        <Button color="blue" icon={<Settings />} size="large" iconLeft>
          Settings
        </Button>
      </S.FastAcecces>

      <S.Language>
        <S.Title>Language</S.Title>
        <select name="language">
          <option value="eng">english</option>
          <option value="pt-br">portuguese</option>
        </select>
      </S.Language>
    </S.Content>
  </S.Wrapper>
)

export default Footer
