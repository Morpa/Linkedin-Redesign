import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Linkedin</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('width: min(100%,108rem)')

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: min(100%,108rem);
        margin: 12.8rem auto 3.2rem auto;
        display: grid;
        grid-template-columns: 76.6rem 29rem;
        gap: 4rem;
        position: relative;
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
