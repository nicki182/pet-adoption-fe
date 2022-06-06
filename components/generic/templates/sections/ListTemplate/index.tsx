import  Grid,{Props as GridProps}  from '@components/generic/layouts/Grid';
import { createElement, useCallback,FC } from 'react';
import {gridProps,gridGaps} from './constants'
interface ListTemplateProps{
    items:any[];
    gap?:'small'|'medium'|'big'
    listType:'3-column'|'2-column'|'1-column'|'4-column'|'5-column'|'6-column'| '1-row'|'2-row' | '3-row' |'4-row'|'5-row'|'6-row';
}
const ListTemplate:FC<ListTemplateProps> = ({items,listType,gap})=>{
    const gridPropsByListType=useCallback(():GridProps=>{
        return {...gridProps[listType],gap:gridGaps[gap || 'small']} as GridProps
    },[listType,gap])
    return(
        <Grid {...gridPropsByListType()}>
            {items}
        </Grid>
    )
}
export default ListTemplate;