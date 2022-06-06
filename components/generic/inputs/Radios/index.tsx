import ListTemplate from '@components/generic/templates/sections/ListTemplate';
import _ from 'lodash';
import { FC, useMemo, useState,useEffect } from 'react';
import Radio from './components/Radio';
import { RadiosProps } from '../interfaces';
 const Radios:FC<RadiosProps> = ({radios,value,onChange,listType})=>{
    const [element , setElement] = useState<{[key:string]:any}>({})
    useEffect(()=>{
        if(value){
        setElement(value)
        onChange && onChange(value)
        }
    },[value])
    const handleSelect = (e)=>{
        const {value} = e.target;
        setElement(value)
        onChange && onChange(value)
        }

    const items = useMemo(() => radios.map((radio,index) =>
    <Radio checked={radio.value === element } key={index} {...radio} onChange={handleSelect}/>)
    , [radios,element]);
    return <ListTemplate items={items} listType={listType?listType:'1-column'} gap="small" />
}
export default Radios;