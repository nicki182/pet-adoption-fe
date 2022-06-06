import { InputProps } from "../interfaces"
import { FC,forwardRef,useRef,useState,useEffect } from "react"
import Input from "../Input"
import Box from "@components/generic/Box"
import styled from "styled-components"
import {Search as SearchIcon} from '@styled-icons/bootstrap/Search'
import Flex from "@components/generic/layouts/Flex"
import useDebaunce from "@hooks/generic/useDebaunce"
const MySearchIcon = styled(SearchIcon)`
    color: ${({ theme }) => theme.colors.black};
    width: ${({ theme }) => theme.sizes.fontSizes.small};
    heigth: ${({ theme }) => theme.sizes.fontSizes.small};
    `;
const MyBox = styled(Box)`
border: 1px solid ${({ theme }) => theme.colors.black};
}`
const MyFlex = styled(Flex)`
    box-shadow: ${({ theme }) => theme.extras.boxShadow.allRound.medium};
    width:5rem;
    cursor:pointer;
}`
const Search:FC<Omit<InputProps,'type'|'sizes'>> =forwardRef( ({...props},ref) => {
    const inputRef = useRef(ref);
    const [searchValue,setSearchValue] = useState(props.value || '');
    const value = useDebaunce(searchValue,500);
    useEffect(()=>{
       props.onChange && props.onChange(value);
    },[value])
    return      <MyBox height='3.90rem' width='45rem'>
            <Flex>
        <MyFlex 
        onClick={()=>inputRef && inputRef.current && inputRef.current.focus && inputRef.current.focus()} 
        direction='row' gap='small' align='center'>
                <MySearchIcon/>
             </MyFlex>
    <Input sizes='big' onChange={(e)=>setSearchValue(e.target.value)} ref={inputRef}  {...props}/>
    </Flex>    
    </MyBox>

})
Search.displayName = 'Search'
export default Search;