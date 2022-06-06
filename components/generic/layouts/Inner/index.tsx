import { SizeTypes } from "@components/generic/interfaces";
import styled from "styled-components";
interface Props {
    paddingX?: SizeTypes  ;
    marginX?:SizeTypes;
    paddingY?: SizeTypes;
    marginY?: SizeTypes;
    isMaxWidthView?:boolean;
}
const Inner = styled.div<Props>`
    padding-right: ${({ paddingX ,theme }) => theme.spacing.padding.x[paddingX || '']};
    padding-left: ${({ paddingX,theme }) => theme.spacing.padding.x[paddingX || '']};
    padding-bottom: ${({ paddingY,theme }) => theme.spacing.padding.y[paddingY || '']};
    padding-top: ${({ paddingY,theme }) => theme.spacing.padding.y[paddingY || '']};
    margin-right: ${({ marginX,theme }) =>theme.spacing.margin.x[marginX || '']};
    margin-left: ${({ marginX ,theme }) => theme.spacing.margin.x[marginX || '']};
    margin-bottom: ${({ marginY ,theme }) => theme.spacing.margin.y[marginY || '']};
    margin-top: ${({ marginY ,theme }) => theme.spacing.margin.y[marginY || '']};
    width: 100%;
    height: 100%;
    max-width:${({theme,isMaxWidthView})=>isMaxWidthView?theme.sizes.maxWidth.desktop:''};
`;

export default Inner;