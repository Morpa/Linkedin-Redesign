import { Story, Meta } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    img:
      'https://avatars2.githubusercontent.com/u/15898709?s=400&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4'
  }
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />
