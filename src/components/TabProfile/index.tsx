import Avatar from 'components/Avatar'

import * as S from './styles'

import profileMock from './profileMock'

const TabProfile = () => {
  return (
    <S.Wrapper>
      <S.About>
        <S.Title>About</S.Title>
        {`I'm more expericiend in eCommerce web projects, but like also to work
        with creative projects, such as landing pages or unusual corporate
        websites.`}
        <S.SeeMore>See more</S.SeeMore>
      </S.About>

      <S.Projects>
        <S.Title>Projects</S.Title>
        <S.Cards>
          {profileMock.projects.map((project) => (
            <S.Card key={project.name}>
              <img src={project.thumb} alt=" Landing Page by Madhu" />
              <p>{project.name}</p>
              <span>{project.info}</span>
            </S.Card>
          ))}
        </S.Cards>
        <S.SeeMore>Show all</S.SeeMore>
      </S.Projects>

      <S.Skills>
        <S.Title>Skills & Endoresments</S.Title>
        <S.CardsSkills>
          {profileMock.skills.map((skill) => (
            <S.CardSkills key={skill.name}>
              <strong>
                {skill.name}
                <span>{skill.quantity}</span>
              </strong>
              <img src={skill.thumb} alt="Users endoresments" />
            </S.CardSkills>
          ))}
        </S.CardsSkills>
      </S.Skills>

      <S.Experience>
        <S.Title>Experience</S.Title>
        <S.List>
          {profileMock.experiences.map((experience) => (
            <S.Item key={experience.title}>
              <Avatar size="small" img={experience.thumb} />
              <S.DescriptionItem>
                <strong>{experience.title}</strong>
                <span>
                  {experience.company}
                  <strong>{experience.duration}</strong>
                </span>

                <p>{experience.description}</p>
              </S.DescriptionItem>
            </S.Item>
          ))}
        </S.List>
      </S.Experience>

      <S.Education>
        <S.Title>Education</S.Title>
        <S.List>
          {profileMock.education.map((item) => (
            <S.Item key={item.course}>
              <Avatar img={item.thumb} size="small" />
              <S.DescriptionItem>
                <strong>{item.school}</strong>
                <span>{item.course}</span>
                <strong>{item.year}</strong>
              </S.DescriptionItem>
            </S.Item>
          ))}
        </S.List>
      </S.Education>
    </S.Wrapper>
  )
}

export default TabProfile
