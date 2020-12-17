import Link from 'next/link'
import { MoreHoriz } from '@styled-icons/material-outlined'
import { SearchAlt as SearchIcon } from '@styled-icons/boxicons-regular'
import {
  ArrowUpRight,
  Users,
  Briefcase,
  Rss,
  MessageSquare,
  Bell
} from '@styled-icons/feather'

import MenuOptions from 'components/MenuOptions'
import Logo from 'components/Logo'
import Avatar from 'components/Avatar'
import TextField from 'components/TextField'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo hideText />

        <S.NavPages>
          <MenuOptions link="/feed" linkName="Feed" icon={<Rss />} />

          <MenuOptions link="/network" linkName="Network" icon={<Users />} />

          <MenuOptions link="/jobs" linkName="Jobs" icon={<Briefcase />} />

          <MenuOptions link="/chat" linkName="Chat" icon={<MessageSquare />} />

          <MenuOptions link="/notices" linkName="Notices" icon={<Bell />} />
        </S.NavPages>

        <S.Search>
          <TextField name="search" placeholder="Search" icon={<SearchIcon />} />
        </S.Search>

        <S.Profile>
          <Avatar
            img="https://avatars2.githubusercontent.com/u/15898709?s=400&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4"
            size="small"
          />
          <S.Info>
            <strong>
              <Link href="/">
                <a>André Morpa</a>
              </Link>
            </strong>
            <span>
              567 views today
              <p>
                + 62 <ArrowUpRight />
              </p>
            </span>
          </S.Info>
        </S.Profile>
        <S.Outher>
          <MoreHoriz />
          <strong>Outher</strong>
        </S.Outher>
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
