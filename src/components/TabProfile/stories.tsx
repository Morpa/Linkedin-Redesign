import { Story, Meta } from '@storybook/react/types-6-0'
import TabProfile from '.'

export default {
  title: 'TabProfile',
  component: TabProfile
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '80rem', margin: 'auto' }}>
    <TabProfile />
  </div>
)
