import Box from "@components/generic/Box"
import { ReactNode,FC } from 'react';
import { Position } from '../../../interfaces';
import {map} from 'lodash'
interface Element{
    position:Position;
    content:ReactNode;
}
interface Props {
    image:ReactNode,
    elements:Element[]
}
const BannerTemplate:FC<Props> = ({image,elements}) => {
    return(
        <Box position="relative" noBoxShadow={true} width='100%' height="100vh">
            {image}
            {map(elements,(element,index)=>{
          return <Box 
          key={index} 
          noBoxShadow={true}
           position={"absolute"}
           height="auto"
              width="auto"
            backgroundColor={'transparent'} 
            left={element.position.left} 
            bottom={element.position.bottom}
             right={element.position.right} 
             top={element.position.top}>
              {element.content}
              </Box>  
        })
        }
        </Box>
    )
}
export default BannerTemplate;