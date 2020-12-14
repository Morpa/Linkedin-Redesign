import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render logo whit text', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
  })

  it('should render logo whitout text', () => {
    renderWithTheme(<Logo hideText />)

    expect(screen.queryByText(/linkedin/i)).not.toBeInTheDocument()
  })
})
