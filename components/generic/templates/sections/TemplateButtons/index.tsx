import { ReactNode,FC } from 'react';
import Flex from '@components/generic/layouts/Flex';
export interface Props {
    buttons: {cancel?:ReactNode,submit?:ReactNode}
}
const TemplateButtons:FC<Props> = ({buttons}) => {
    return <Flex justify={'space-between'} gap='medium'>
        {buttons.cancel}
        {buttons.submit}
    </Flex>
}
export default TemplateButtons;