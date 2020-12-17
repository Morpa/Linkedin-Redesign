import { render, screen } from '@testing-library/react'

import TabActivity from '.'

describe('<TabActivity />', () => {
  it('should render the heading', () => {
    const { container } = render(<TabActivity />)

    expect(
      screen.getByRole('heading', { name: /TabActivity/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
