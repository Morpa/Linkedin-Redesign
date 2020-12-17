import { Meta, Story } from '@storybook/react/types-6-0'

import Footer, { FooterProps } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Basic: Story<FooterProps> = (args) => <Footer {...args} />

Basic.args = {
  links: [
    {
      link: '#',
      title: 'About'
    },
    {
      link: '#',
      title: 'Carreers'
    },
    {
      link: '#',
      title: 'Advertising'
    },
    {
      link: '#',
      title: 'Small Business'
    },
    {
      link: '#',
      title: 'Talent Solutions'
    },
    {
      link: '#',
      title: 'Marketing Solutions'
    },
    {
      link: '#',
      title: 'Sales Solutions'
    },
    {
      link: '#',
      title: 'Safery Center'
    },
    {
      link: '#',
      title: 'Commutiny Guidelines'
    },
    {
      link: '#',
      title: 'Privacy & Terms'
    },
    {
      link: '#',
      title: 'Mobile App'
    }
  ]
}
