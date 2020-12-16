import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => <Navbar {...args} />
