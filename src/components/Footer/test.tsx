import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

import mockFooter from './mock'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Footer links={mockFooter} />)

    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()

    expect(screen.getAllByRole('button')).toHaveLength(2)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    expect(container.firstChild).toMatchSnapshot()
  })
})
