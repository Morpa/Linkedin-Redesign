import * as S from './styles'

export interface AvatarProps {
  size?: 'small' | 'medium' | 'large'
  img: string
}

const Avatar = ({ size = 'large', img }: AvatarProps) => (
  <S.Wrapper size={size}>
    <img src={img} alt="Avatar Photo" />
  </S.Wrapper>
)

export default Avatar
