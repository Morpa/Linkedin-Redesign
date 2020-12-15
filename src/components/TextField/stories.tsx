import { Story, Meta } from '@storybook/react/types-6-0'
import { SearchAlt as SearchIcon } from '@styled-icons/boxicons-regular'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ width: '38rem', height: '15rem', margin: '0 auto' }}>
    <TextField placeholder="Search" {...args} />
  </div>
)

export const wihtIcon: Story<TextFieldProps> = (args) => (
  <div style={{ width: '38rem', height: '15rem', margin: '0 auto' }}>
    <TextField icon={<SearchIcon />} placeholder="Search" {...args} />
  </div>
)
