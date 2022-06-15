import SearchBar from "@components/generic/wizards/Search";
import {advancedSearchOptions} from './constants'
import { FC } from 'react';
interface Props {
    onSearch: (values: any) => void;
    loading: boolean;
}
const AnimalListSearchBar:FC<Props> = ({onSearch,loading}) => {
    return <SearchBar 
    advacedSearchOptions={advancedSearchOptions} 
    searching={loading}
    onSearchChange={onSearch}
    onAdvancedSearchChange={onSearch}
    />;
    }
export default AnimalListSearchBar;