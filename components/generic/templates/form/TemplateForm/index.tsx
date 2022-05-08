
import Flex from '@components/generic/layouts/Flex';
import TemplateButtons from '../TemplateButtons/index';
export interface Props {
    children: React.ReactNode;
    buttons:{cancel?:React.ReactNode,submit?:React.ReactNode};
}
const TemplateForm:React.FC<Props> = ({children,buttons}) => {
    return (
        <Flex direction='column' gap='medium'>
            {children}
                <TemplateButtons
                    buttons={buttons}
                />
        </Flex>
    );
    }
    export default TemplateForm;