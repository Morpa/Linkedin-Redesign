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

  it('should render logo whit premium color', () => {
    renderWithTheme(<Logo premium />)

    expect(screen.getByLabelText(/linkedin/i)).toHaveStyle({
      color: '##D8C281'
    })

    expect(screen.getByLabelText(/linkedin/i)).toHaveStyle({
      color: '##AC9B69'
    })
  })
})
