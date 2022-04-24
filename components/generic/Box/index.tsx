import styled from 'styled-components'
import { SizeTypes } from '../interfaces'
interface Props{
    size?:SizeTypes
    backgroundColor?:'primary'|'secondary'|'white'
}
const Box = styled.div<Props>`
background-color:${({theme,backgroundColor = 'white'})=>theme.colors[backgroundColor]};
width:${({theme,size='default'})=>theme.sizes.box[size].width};
height:${({theme,size='default'})=>theme.sizes.box[size].height};
box-shadow:${({theme})=>theme.extras.boxShadow.allRound.medium};
border-radius:${({theme})=>theme.extras.borderRadius.medium};
`
export default Box;
