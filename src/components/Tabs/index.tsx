import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import * as S from './styles'

export type TabsContentProps = {
  firstTitle: string
  secondTitle: string
  thirdTitle: string
  firstContent: React.ReactNode
  secondContent: React.ReactNode
  thirdContent: React.ReactNode
}

const TabsContent = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  firstContent,
  secondContent,
  thirdContent
}: TabsContentProps) => (
  <S.Wrapper>
    <Tabs>
      <TabList>
        <Tab>{firstTitle}</Tab>
        <Tab>{secondTitle}</Tab>
        <Tab>{thirdTitle}</Tab>
      </TabList>

      <TabPanel>{firstContent}</TabPanel>
      <TabPanel>{secondContent}</TabPanel>
      <TabPanel>{thirdContent}</TabPanel>
    </Tabs>
  </S.Wrapper>
)

export default TabsContent
