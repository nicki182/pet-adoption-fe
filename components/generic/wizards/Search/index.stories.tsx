import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search from '.'
export default {
  title: 'Generic/Wizard/Search',
  component: Search,
} as ComponentMeta<typeof Search>;
const Template: ComponentStory<typeof Search> = (args) =>(
<Search {...args} />
)
;

export const GenericSearch = Template.bind({});
GenericSearch.args = {
    advancedSearchOptions:[{label:'Checkbox1',value:'checkbox1'},{label:'Checkbox2',value:'checkbox2'}],
    onAdvancedSearchChange:()=>{},
    onSearchChange:()=>{},
}