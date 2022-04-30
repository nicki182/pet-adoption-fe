import { FC,ReactElement } from "react";
import {map,filter} from 'lodash'
import Navigator from "@components/generic/wizards/NavBar/components/Navigator"
import  Link  from 'next/link';
import NavItem from '@components/generic/wizards/NavBar/components/NavItem'
interface Item {
    isLink:boolean;
    href?:string;
    children:ReactElement | string;
    isLeft:boolean
}
interface Props {
    items:Item[];
}
const NavBar:FC<Props> = ({items}) => {
    const getChildrenItem = (item:Item):ReactElement => {
        if(item.isLink){
            return <Link passHref href={item.href as string}><NavItem>{item.children}</NavItem></Link>
        }
        return <NavItem>{item.children}</NavItem> 
    }
    const leftButtonsSection =map(filter(items,{isLeft:true}),(item,index)=>{
        return getChildrenItem(item)
    })
    const rightButtonsSection = map(filter(items,{isLeft:false}),(item,index)=>{
        return getChildrenItem(item)
    })
    return(
        <Navigator
            leftButtonsSection={leftButtonsSection}
            rightButtonsSection={rightButtonsSection}
        />

    )
}
export default NavBar;