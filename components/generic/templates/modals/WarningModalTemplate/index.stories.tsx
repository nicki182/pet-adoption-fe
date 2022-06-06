import { ComponentMeta, ComponentStory } from '@storybook/react';
import WarningModalTemplate from '.'
import  SecondaryButton  from '@components/generic/buttons/Secondary';
import PrimaryButton from '@components/generic/buttons/Primary';
import Typography from '@components/generic/text/Typography';
export default {
  title: 'Generic/Templates/WarningModalTemplate',
  component: WarningModalTemplate,
} as ComponentMeta<typeof WarningModalTemplate>;
const Template: ComponentStory<typeof WarningModalTemplate> = (args) =>(
<WarningModalTemplate {...args} />
)
;

export const GenericWarningModalTemplate = Template.bind({});
GenericWarningModalTemplate.args = {
    header:<Typography element='h1' isTitle={true} color='warning'>
        Warning
    </Typography>,
    explanation:<Typography element='p'>
        This is a warning message
    </Typography>,
    buttons:{
        cancel:<SecondaryButton>Cancel</SecondaryButton>,
        submit:<PrimaryButton>Submit</PrimaryButton>
    }
}