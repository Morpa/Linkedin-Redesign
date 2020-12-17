import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import mockFooter from 'components/Footer/mock'

import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Navbar />
    {children}
    <Footer links={mockFooter} />
  </S.Wrapper>
)

export default Base
