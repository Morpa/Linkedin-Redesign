import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'

export type MenuOptionsProps = {
  link: string
  linkName: string
  icon?: React.ReactNode
  activeLink?: string
}

const MenuOptions = ({
  link,
  linkName,
  icon,
  activeLink
}: MenuOptionsProps) => {
  const router = useRouter()

  return (
    <Link href={link} passHref prefetch={false}>
      <S.Option isActive={activeLink === router.pathname}>
        {!!icon && icon}
        <strong>{linkName}</strong>
      </S.Option>
    </Link>
  )
}

export default MenuOptions
