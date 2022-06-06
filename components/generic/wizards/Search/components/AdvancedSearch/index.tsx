import { FC,useState } from "react";
import  TemplateInput  from "@components/generic/templates/form/TemplateInput";
import Collapsable from "@components/generic/wizards/Collapsable";
import { useFormContext } from 'react-hook-form';
import  ControllerForm  from '@components/generic/form/Controller';
import Checkboxes from '@components/generic/inputs/Checkboxes';
import { CheckboxesProps } from "@components/generic/inputs/interfaces";
interface AdvancedSearchProps{
    checkboxes:Omit<CheckboxesProps,'isMultiple'|'listType' | 'value'>
    onChange?:(value:any)=>void
}
const AdvancedSearch:FC<AdvancedSearchProps> = ({checkboxes,onChange}) => {
    const [ values, setValues ] = useState<any>([]);
    const handleToggle = (open:boolean) => {
         !open && setValues([]) 
    }
    const handleOnChange = (value)=>{
        setValues(value)
        onChange && onChange(value)

    }
    return <Collapsable
           onToggle={handleToggle}
           isOpen={false}>
               <Checkboxes value={values} onChange={handleOnChange}  listType={'3-column'} isMultiple={true} {...checkboxes}/>
               </Collapsable>
        
    }
    export default AdvancedSearch;