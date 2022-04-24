import  styled  from 'styled-components';
import { GenericInputProps } from '../interfaces';
const Input = styled.input.attrs(props => ({
    type: props.type || 'text'
  }))<GenericInputProps>`
border:none;  
outline: ${({isError,theme})=>isError?`2px solid ${theme.colors.danger} `:'none'};
border-radius: 4px;
padding: 0.5rem;
box-shadow: ${({ theme }) => theme.extras.boxShadow.allRound.xlSmall};
width: ${({ sizes, theme }) =>theme.sizes.input[sizes || 'default'].width};
height: ${({ sizes, theme }) => theme.sizes.input[sizes || 'default'].height};
&:focus{
    outline:${({isError, theme }) =>isError?theme.colors.danger:theme.colors.primary} 2px solid ;
&::placeholder{
    color: ${({ theme }) => theme.colors.grey};
}
`;
export default Input;