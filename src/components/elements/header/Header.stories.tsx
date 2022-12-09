import { ComponentMeta, ComponentStory } from '@storybook/react'

import Header from './Header'

export default {
    title: 'elements/Header',
    component: Header,
    argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderWitouthDescripiton = Template.bind({})
HeaderWitouthDescripiton.args = {
    title: 'Storybook title',
}

export const HeaedrWithDescription = Template.bind({})
HeaedrWithDescription.args = {
    title: 'Storybook title',
    subtitle: 'Storybook subtitle',
}
