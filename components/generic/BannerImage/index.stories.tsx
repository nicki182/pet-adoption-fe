import { ComponentMeta, ComponentStory } from '@storybook/react';
import BannerImage from '.'
export default {
  title: 'Generic/BannerImage',
  component: BannerImage,
} as ComponentMeta<typeof BannerImage>;
const Template: ComponentStory<typeof BannerImage> = (args) =>(
<BannerImage {...args} />
)
;

export const GenericBannerImage = Template.bind({});
GenericBannerImage.args = {
    image:'/sleeping_dog.jpg',
    elements:[{
        position:{
            top:'10%',
            left:'10%',
            right:'10%',
            bottom:'10%'
        },
        content:<h1>Hello</h1>
    }]
}