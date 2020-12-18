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

import mockProfile from './mockProfile'

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

        <S.Image src={mockProfile.cover} />

        <Avatar size="large" img={mockProfile.avatar} />

        <S.ContentProfile>
          <S.Title>
            <p>
              {mockProfile.name}
              <img src="/img/logoPremium.svg" alt="logo Premium" />
            </p>
            <S.Location>
              <Navigation />
              <p>{mockProfile.location}</p>
            </S.Location>
          </S.Title>

          <S.Description>{mockProfile.job}</S.Description>

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

        {mockProfile.visitors.map((visitor, index) => (
          <S.VisitorsWrapper key={`visitor-${visitor.name}-${index}`}>
            <Avatar img={visitor.avatar} size="small" />
            <S.VisitorInfo>
              <strong>{visitor.name}</strong>
              <span>{visitor.job}</span>
            </S.VisitorInfo>
          </S.VisitorsWrapper>
        ))}
      </S.Visitors>
    </S.ContentRight>
  </Container>
)

export default Profile
