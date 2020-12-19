import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import TabProfile from '.'

describe('<TabProfile />', () => {
  it('should render the sections', () => {
    renderWithTheme(<TabProfile />)

    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /projects/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Skills & Endoresments/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /education/i })
    ).toBeInTheDocument()
  })
})
