import ListTemplate from '@components/generic/templates/sections/ListTemplate';
import _ from 'lodash';
import { FC, useMemo, useState,useEffect } from 'react';
import Checkbox from '../Checkbox';
import { CheckboxesProps } from '../interfaces';
 const Checkboxes:FC<CheckboxesProps> = ({checkboxes,value,isMultiple = true,onChange,listType})=>{
    const [element , setElement] = useState<{[key:string]:any}>({})
    const [elements,setElements ] = useState<{[key:string]:any}[]>([])
    useEffect(()=>{
        value && isMultiple ? setElements(value) : setElement(value)
        onChange && onChange(value)
    },[value,isMultiple])
    const handleSelect = (e)=>{
        const {value} = e.target;
        if(isMultiple){
            setElements(pre=>{
                if(pre.includes(value)){
                    const newElements = _.without(pre,value)
                    onChange && onChange(newElements)
                    return newElements
                }
                const newElements = [...pre,value]
                onChange && onChange(newElements)
                return newElements
            });
            return
        }
        setElement(value)
        onChange && onChange(value)
        }

    const items = useMemo(() => checkboxes.map((checkbox,index) =>
    <Checkbox checked={checkbox.value === element || _.some(elements,e=>e===checkbox.value)} key={index} {...checkbox} onChange={handleSelect}/>)
    , [checkboxes,elements,element]);
    return <ListTemplate items={items} listType={isMultiple && listType?listType:'1-column'} gap="small" />
}
export default Checkboxes;