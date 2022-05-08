import { ReactNode,FC,cloneElement,ReactElement } from "react"
import  Flex  from '@components/generic/layouts/Flex';
import Inner from "@components/generic/layouts/Inner";
interface Props {
    leftButtons: ReactElement[];
    rightButtons: ReactElement[];
}
const NavitagationTemplate:FC<Props> = ({leftButtons,rightButtons}) => {
    return(<Flex direction="row">
        <Flex direction="row" justify="flex-start" gap='medium'>
    {leftButtons.map((button,index)=>{
        return cloneElement(button,{key:index})
    })}
    </Flex>
    <Flex direction="row" justify="flex-end" gap='medium'>            
    {rightButtons.map((button,index)=>{
        return cloneElement(button,{key:index})
    })}
    </Flex>
    </Flex>)
}
export default NavitagationTemplate