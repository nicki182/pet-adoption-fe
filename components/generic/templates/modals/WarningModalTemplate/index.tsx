import { FC,ReactNode } from 'react';
import Flex from "@components/generic/layouts/Flex"
import TemplateButtons from '../../sections/TemplateButtons';
interface Props {
    header: ReactNode
    buttons: {
        cancel?: ReactNode
        submit?: ReactNode
    }
    explanation: ReactNode
}
const WarningModalTemplate:FC<Props> = ({header,explanation,buttons}) => {
    return <Flex direction='column' gap='medium'>
        {header}
        {explanation}
        <TemplateButtons buttons={buttons}/>
    </Flex>
}
export default WarningModalTemplate;