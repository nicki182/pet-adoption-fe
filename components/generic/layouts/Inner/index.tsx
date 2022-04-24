import styled from "styled-components";
interface Props {
    paddingX?: 'small' | 'medium' | 'big'  ;
    marginX?: 'small' | 'medium' | 'big';
    paddingY?: 'small' | 'medium' | 'big';
    marginY?: 'small' | 'medium' | 'big';
}
const Inner = styled.div<Props>`
    padding-right: ${({ paddingX = 'medium',theme }) => theme.spacing.padding.x[paddingX]};
    padding-left: ${({ paddingX = 'medium',theme }) => theme.spacing.padding.x[paddingX]};
    padding-bottom: ${({ paddingY = 'medium',theme }) => theme.spacing.padding.y[paddingY]};
    padding-top: ${({ paddingY = 'medium',theme }) => theme.spacing.padding.y[paddingY]};
    margin-right: ${({ marginX = 'medium',theme }) =>theme.spacing.margin.x[marginX]};
    margin-left: ${({ marginX = 'medium',theme }) => theme.spacing.margin.x[marginX]};
    margin-bottom: ${({ marginY = 'medium',theme }) => theme.spacing.margin.y[marginY]};
    margin-top: ${({ marginY = 'medium',theme }) => theme.spacing.margin.y[marginY]};
    width: 100%;
    height: 100%;
`;
export default Inner;