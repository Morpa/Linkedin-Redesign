import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Avatar from '.'

const props = {
  img:
    'https://avatars2.githubusercontent.com/u/15898709?s=400&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4'
}

describe('<Avatar />', () => {
  it('should render a large avatar when size is not passed', () => {
    renderWithTheme(<Avatar {...props} />)

    expect(screen.getByRole('img', { name: /Avatar Photo/i })).toHaveAttribute(
      'src',
      props.img
    )

    expect(
      screen.getByRole('img', { name: /Avatar Photo/i }).parentElement
    ).toHaveStyle({
      width: '17rem'
    })
  })

  it('should render a small avatar when size is passed', () => {
    renderWithTheme(<Avatar size="small" {...props} />)

    expect(
      screen.getByRole('img', { name: /Avatar Photo/i }).parentElement
    ).toHaveStyle({
      width: '4.2rem'
    })
  })

  it('should render a medium avatar when size is passed', () => {
    renderWithTheme(<Avatar size="medium" {...props} />)

    expect(
      screen.getByRole('img', { name: /Avatar Photo/i }).parentElement
    ).toHaveStyle({
      width: '5.2rem'
    })
  })
})
