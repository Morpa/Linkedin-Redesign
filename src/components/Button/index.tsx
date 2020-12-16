import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'
import { WrapperProps } from './styles'

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  label?: string
  color?: 'white' | 'blue'
  border?: boolean
  iconLeft?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    size = 'medium',
    icon,
    color = 'blue',
    border,
    children,
    iconLeft,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      color={color}
      border={border}
      iconLeft={iconLeft}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <small>{children}</small>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
