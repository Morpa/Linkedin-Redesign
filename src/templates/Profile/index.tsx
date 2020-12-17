import Link from 'next/link'
import { Upload, Edit, MoreVertical, Navigation } from '@styled-icons/feather'

import { Container } from 'components/Container'
import Button from 'components/Button'
import Avatar from 'components/Avatar'
import TabContent from 'components/Tabs'
import TabProfile from 'components/TabProfile'
import TabActivity from 'components/TabActivity'
import TabArticles from 'components/TabArticles'

import * as S from './styles'

const Profile = () => (
  <Container>
    <S.ContentLeft>
      <S.ProfileInfo>
        <S.WrapperButtons>
          <Button color="white" size="small" icon={<Upload />} />
          <div>
            <Button color="white" size="medium" icon={<Edit />}>
              Edit Profile
            </Button>
            <Button color="white" size="small" icon={<MoreVertical />} />
          </div>
        </S.WrapperButtons>

        <S.Image src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80" />

        <Avatar
          size="large"
          img="https://avatars2.githubusercontent.com/u/15898709?s=400&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4"
        />

        <S.ContentProfile>
          <S.Title>
            <p>
              André Morpa
              <img src="/img/logoPremium.svg" alt="logo Premium" />
            </p>
            <S.Location>
              <Navigation />
              <p>Porto, Portugal</p>
            </S.Location>
          </S.Title>

          <S.Description>Front End Developer</S.Description>

          <S.GroupButtons>
            <Button color="blue" size="large">
              Contact Info
            </Button>
            <Button size="large" border>
              1,453 Connections
            </Button>
          </S.GroupButtons>
        </S.ContentProfile>
      </S.ProfileInfo>
      <S.Tabs>
        <TabContent
          firstTitle="Profile"
          secondTitle="Activity & Interests"
          thirdTitle="Articles"
          firstContent={<TabProfile />}
          secondContent={<TabActivity />}
          thirdContent={<TabArticles />}
        ></TabContent>
      </S.Tabs>
    </S.ContentLeft>

    <S.ContentRight>
      <S.Dashboard>
        <S.DashTitle>
          your dashboard
          <Link href="/#">
            <a>Go to stats</a>
          </Link>
        </S.DashTitle>
        <strong>620</strong>
        <span>views today</span>
        <strong>55</strong>
        <span>post views</span>
        <strong>93</strong>
        <span>search apperaances</span>
      </S.Dashboard>

      <S.Visitors>
        <S.Title>
          visitors
          <Link href="/#">
            <a>view all</a>
          </Link>
        </S.Title>

        <S.VisitorsWrapper>
          <Avatar
            img="https://images.unsplash.com/photo-1591361796603-01599a42e701?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhciUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            size="small"
          />
          <S.VisitorInfo>
            <strong>Darlene Stone</strong>
            <span>HR-Manager</span>
          </S.VisitorInfo>
        </S.VisitorsWrapper>

        <S.VisitorsWrapper>
          <Avatar
            img="https://images.unsplash.com/photo-1565697451991-9c2bd0524fd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2815&q=80"
            size="small"
          />
          <S.VisitorInfo>
            <strong>Carrie Blackburn</strong>
            <span>Tech Lead</span>
          </S.VisitorInfo>
        </S.VisitorsWrapper>

        <S.VisitorsWrapper>
          <Avatar
            img="https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"
            size="small"
          />
          <S.VisitorInfo>
            <strong>Leroy Rowland</strong>
            <span>Product Designer</span>
          </S.VisitorInfo>
        </S.VisitorsWrapper>

        <S.VisitorsWrapper>
          <Avatar
            img="https://images.unsplash.com/photo-1594106589088-9da303043b29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            size="small"
          />
          <S.VisitorInfo>
            <strong>Garry Demon</strong>
            <span>IOS Developer</span>
          </S.VisitorInfo>
        </S.VisitorsWrapper>
        <S.VisitorsWrapper>
          <Avatar
            img="https://images.unsplash.com/photo-1590489148665-1ee3f0eb882b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            size="small"
          />
          <S.VisitorInfo>
            <strong>Bred Oliver</strong>
            <span>Senior UX Designer</span>
          </S.VisitorInfo>
        </S.VisitorsWrapper>
      </S.Visitors>
    </S.ContentRight>
  </Container>
)

export default Profile
