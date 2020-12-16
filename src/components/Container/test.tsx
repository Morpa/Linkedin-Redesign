import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Linkedin</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 12.8rem auto 3.2rem auto;
        display: grid;
        grid-template-columns: 76.6rem 29rem;
        gap: 4rem;
        position: relative;
        width: 100%;
        max-width: 130rem;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Linkedin
        </span>
      </div>
    `)
  })
})
