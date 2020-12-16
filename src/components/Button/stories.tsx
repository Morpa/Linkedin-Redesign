import { Story, Meta } from '@storybook/react/types-6-0'
import { Edit, MoreVert } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const basicBlue: Story<ButtonProps> = (args) => <Button {...args} />
basicBlue.args = {
  children: 'contact info',
  color: 'blue',
  size: 'large'
}

export const basicWhite: Story<ButtonProps> = (args) => <Button {...args} />
basicWhite.args = {
  children: 'edit profile',
  color: 'white',
  icon: <Edit />
}

export const withBorder: Story<ButtonProps> = (args) => <Button {...args} />
withBorder.args = {
  children: '1.090 connections',
  border: true
}

export const small: Story<ButtonProps> = (args) => <Button {...args} />
small.args = {
  icon: <MoreVert />,
  size: 'small'
}

export const iconLeft: Story<ButtonProps> = (args) => (
  <Button iconLeft {...args} />
)
iconLeft.args = {
  icon: <MoreVert />,
  children: 'Questions?',
  size: 'large',
  color: 'blue'
}
