import styled from 'styled-components'
import { SizeTypes } from '../interfaces'
interface Props{
    size?:SizeTypes | 80 | 50
    backgroundColor?:'primary'|'secondary'|'white'|'transparent'
    height?:string;
    width?:string;
    position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    noBoxShadow?:boolean;
}
const Box = styled.div<Props>`
background-color:${({theme,backgroundColor = 'white'})=>theme.colors[backgroundColor]};
width:${({theme,size='default',width})=>width?width:theme.sizes.box[size].width};
height:${({theme,size='default',height})=>height?height:theme.sizes.box[size].height};
box-shadow:${({theme,noBoxShadow})=>!noBoxShadow?theme.extras.boxShadow.allRound.medium:'none'};
border-radius:${({theme})=>theme.extras.borderRadius.medium};
top: ${({ top }) => top || 'auto'};
left: ${({ left }) => left || 'auto'};
right: ${({ right }) => right || 'auto'};
bottom: ${({ bottom }) => bottom || 'auto'};
position: ${({ position }) => position || 'static'};
`
export default Box;
