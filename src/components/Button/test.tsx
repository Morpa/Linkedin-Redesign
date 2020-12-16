import { screen } from '@testing-library/react'
import { Edit } from '@styled-icons/material-outlined'

import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(
      <Button color="blue">My Button</Button>
    )

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      height: '3.6rem',
      width: '13.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">My Button</Button>)

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      height: '3.6rem',
      width: '3.6rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">My Button</Button>)

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      height: '3.2rem',
      width: '17rem'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<Edit data-testid="icon" />}>My Button</Button>
    )

    expect(screen.getByText(/my button/i)).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the button with white color', () => {
    renderWithTheme(<Button color="white">My Button</Button>)

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      background: '#FFFFFF'
    })
  })

  it('should render the button with border', () => {
    renderWithTheme(
      <Button border color="white">
        My Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      border: '1px solid #0275B1',
      background: '#FFFFFF'
    })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render the button with icon reverse', () => {
    renderWithTheme(
      <Button icon={<Edit data-testid="icon" />} iconLeft>
        My Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /My Button/i })).toHaveStyle({
      'flex-direction': 'row-reverse'
    })

    expect(screen.getByText(/my button/i)).toBeInTheDocument()

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
