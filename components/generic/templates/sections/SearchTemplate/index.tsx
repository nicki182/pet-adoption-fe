import Flex from "@components/generic/layouts/Flex";
import TemplateButtons from "../TemplateButtons";
import { FC,ReactNode } from 'react';
import {Props as TemplateButtonsProps} from '../TemplateButtons'
interface Props {
    search:ReactNode
    advacedSearch:ReactNode
    buttons:{cancel?:ReactNode,submit?:ReactNode}
}
const SearchTemplate:FC<Props> = ({search,advacedSearch,buttons}) => {
    return <Flex direction='column' gap={'small'}>
        {search}
        {advacedSearch}
        <TemplateButtons buttons={buttons}/>
    </Flex>
    }
    export default SearchTemplate;