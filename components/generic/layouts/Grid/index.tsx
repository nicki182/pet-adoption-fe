import styled from 'styled-components';
export interface Props {
    rows:1|2|3|4|5|6| 'auto';
    cols:1|2|3|4|5|6|'auto';
    gap: 'small' | 'medium' | 'big';
}
const Grid = styled.div<Props>`
display: grid;
grid-template-rows: ${({ rows,theme }) => theme.grid.template[rows]};
grid-template-columns: ${({ cols,theme }) => theme.grid.template[cols]};
grid-gap: ${({ gap,theme }) => theme.grid.gap[gap]};
width:100%;
height:100%;
`
export default Grid;