import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/link' }))
}))

describe('<Navbar />', () => {
  it('should render the navbar correctly', () => {
    renderWithTheme(<Navbar />)

    expect(screen.getByText(/feed/i)).toBeInTheDocument()
    expect(screen.getByText(/network/i)).toBeInTheDocument()
    expect(screen.getByText(/jobs/i)).toBeInTheDocument()
    expect(screen.getByText(/chat/i)).toBeInTheDocument()
    expect(screen.getByText(/notices/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Linkedin/i)).toBeInTheDocument()
  })
})
