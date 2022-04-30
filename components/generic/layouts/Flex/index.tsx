import  styled  from 'styled-components';
interface FlexProps {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    gap?: 'small' | 'medium' | 'big' | 'auto';
    width?: string;
    heigth?:string
}
const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    justify-content: ${({ justify = 'center' }) => justify};
    align-items: ${({ align = 'center' }) => align};
    flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
    gap: ${({ gap = 'auto',theme }) =>theme.flex.gap[gap]};
    width:${({width})=>width || '100%'};
    height:${({heigth})=>heigth || '100%'};
`
export default Flex;