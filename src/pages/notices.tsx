import { Container } from 'components/Container'
import Base from 'templates/Base'

const Notices = () => {
  return (
    <Base>
      <Container>
        <div
          style={{
            height: '56rem',
            width: '100%',
            margin: '0 auto',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.8rem'
          }}
        >
          <h1 style={{ fontSize: '5rem' }}>Notices</h1>
        </div>
      </Container>
    </Base>
  )
}

export default Notices
