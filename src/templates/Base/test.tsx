import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Navbar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Navbar"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render navbar, childre and footer', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Navbar')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
