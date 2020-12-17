import { render, screen } from '@testing-library/react'

import TabArticles from '.'

describe('<TabArticles />', () => {
  it('should render the heading', () => {
    const { container } = render(<TabArticles />)

    expect(
      screen.getByRole('heading', { name: /TabArticles/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
