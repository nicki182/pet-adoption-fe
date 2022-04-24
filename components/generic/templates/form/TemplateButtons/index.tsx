import { ReactNode,FC } from 'react';
import Flex from '@components/generic/layouts/Flex';
interface Props {
    buttons: {cancel:ReactNode,submit:ReactNode}
}
const TemplateButtons:FC<Props> = ({buttons}) => {
    return <Flex justify={'space-between'}>
        {buttons.cancel}
        {buttons.submit}
    </Flex>
}
export default TemplateButtons;