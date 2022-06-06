import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '.'
export default {
  title: 'Generic/Box',
  component: Box,
} as ComponentMeta<typeof Box>;
const Template: ComponentStory<typeof Box> = (args) =>(
    <div style={{width:'500px',height:'500px'}}>
    <Box {...args} >
    HELLO INSIDE BOX
    </Box>
    </div>
);

export const GenericBox = Template.bind({});
GenericBox.args = {
}
export const BoxWithSizeSmall = Template.bind({});
BoxWithSizeSmall.args = {
    size:'small'
}
export const BoxWithSizeMedium = Template.bind({});
BoxWithSizeMedium.args = {
    size:'medium'
}
export const BoxWithSizeLarge = Template.bind({});
BoxWithSizeLarge.args = {
    size:'big'
}
export const BoxWithBackgroundColorPrimary = Template.bind({});
BoxWithBackgroundColorPrimary.args = {
    backgroundColor:'primary'
}
export const BoxWithBackgroundColorSecondary = Template.bind({});
BoxWithBackgroundColorSecondary.args = {
    backgroundColor:'secondary'
}