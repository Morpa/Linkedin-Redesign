import { Story, Meta } from '@storybook/react/types-6-0'
import TabsContent, { TabsContentProps } from '.'

export default {
  title: 'TabsContent',
  component: TabsContent
} as Meta

export const Default: Story<TabsContentProps> = (args) => (
  <TabsContent {...args} />
)
Default.args = {
  firstTitle: 'Profile',
  secondTitle: 'Activity & Interests',
  thirdTitle: 'Articles',
  firstContent: 'Content 01',
  secondContent: 'Content 02',
  thirdContent: 'Content 03'
}
