import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Profile />', () => {
  it('should render the heading', () => {
    /*  renderWithTheme(<Profile>Lorem ipsum</Profile>) */
  })
})
