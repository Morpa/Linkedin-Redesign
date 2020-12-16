import { screen } from '@testing-library/react'
import { RssFeed } from '@styled-icons/material-outlined'

import MenuOptions from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

const props = {
  link: '/link',
  linkName: 'My link',
  icon: <RssFeed />
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/link' }))
}))

describe('<MenuOptions />', () => {
  it('should render options correctly', () => {
    const { container } = renderWithTheme(<MenuOptions {...props} />)

    expect(screen.getByText(/my link/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'href',
      '/link'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the icon when it is passed', () => {
    renderWithTheme(
      <MenuOptions {...props} icon={<RssFeed data-testid="icon" />} />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render  when  is active', () => {
    renderWithTheme(<MenuOptions {...props} activeLink="/link" />)

    expect(screen.getByRole('link', { name: /my link/i })).toHaveStyle({
      color: theme.colors.blue
    })
  })
})
