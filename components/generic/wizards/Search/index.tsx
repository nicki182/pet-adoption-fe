import Box from '@components/generic/Box';
import PrimaryButton from '@components/generic/buttons/Primary';
import SecondaryButton from '@components/generic/buttons/Secondary';
import Search from '@components/generic/inputs/Search';
import Inner from '@components/generic/layouts/Inner';
import SearchTemplate from '@components/generic/templates/sections/SearchTemplate';
import _ from 'lodash';
import { FC, useCallback, useState } from 'react';
import AdvancedSearch from './components/AdvancedSearch';
interface Option{
    value:any
    label:string

}
interface SearchProps{
    search?:string
    advacedSearch?:boolean
    onSearchChange:(e:any)=>void
    onAdvancedSearchChange:(e:any)=>void
    advacedSearchOptions:Option[]
    searching:boolean
}

const SearchBar:FC<SearchProps> = ({advancedSearchOptions = [],searching=false,onAdvancedSearchChange,onSearchChange}) =>{
    const [values,setValues] = useState({})
    const handleSearch=(e)=>{
        if(e && e.target && e.target.value){
        onSearchChange(e.target.value)
        setValues(pre=>({...pre,search:e.target.value}))
        return
        }
        onSearchChange('')
        setValues(pre=>({...pre,search:''}))
    }
    const handleAdvancedSearch=(e)=>{
        onAdvancedSearchChange(e)
        setValues(pre=>({...pre,advancedSearch:e}))
    }
    const isDisabled =useCallback(()=>{
       return (!values.search || values.search==='') && (!values.advancedSearch || _.isEmpty(values.advancedSearch))
    },[values])   
    return <Box>
        <Inner paddingY='medium'>
                <SearchTemplate 
                search={<Search onChange={handleSearch} />} 
                advacedSearch={<AdvancedSearch 
                    onChange={handleAdvancedSearch}
                    checkboxes={{checkboxes:advancedSearchOptions}}/>}
                buttons={{
                    submit:<PrimaryButton 
                    disabled={searching || isDisabled() }>
                        {searching?'Searching...':'Search'
                        }</PrimaryButton>,
                    cancel:<SecondaryButton>Cancel</SecondaryButton>}
                    }/>
                </Inner>
                </Box>
}
export default SearchBar;