import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TabsContent from '.'

const props = {
  firstTitle: 'Profile',
  secondTitle: 'Activity & Interests',
  thirdTitle: 'Articles',
  firstContent: 'Content 01',
  secondContent: 'Content 02',
  thirdContent: 'Content 03'
}

describe('<Tabs />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<TabsContent {...props} />)

    expect(screen.getByRole('tab', { name: /profile/i })).toBeInTheDocument()

    expect(
      screen.getByRole('tab', { name: /activity & interests/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('tab', { name: /articles/i })).toBeInTheDocument()

    expect(screen.getByRole('tab', { name: /profile/i })).toHaveClass(
      'react-tabs__tab react-tabs__tab--selected'
    )

    expect(screen.getByRole('tab', { name: /articles/i })).not.toHaveClass(
      'react-tabs__tab react-tabs__tab--selected'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
