
import  Flex from '@components/generic/layouts/Flex';
import Inner from '@components/generic/layouts/Inner';
import TemplateButtons from '../TemplateButtons/index';
interface Props {
    children: React.ReactNode;
    buttons:{cancel:React.ReactNode,submit:React.ReactNode};
}
const TemplateForm:React.FC<Props> = ({children,buttons}) => {
    return (
        <Inner marginY='medium' marginX='medium'>
        <Flex direction='column' gap='medium'>
            {children}
                <TemplateButtons
                    buttons={buttons}
                />
        </Flex>
        </Inner>
    );
    }
    export default TemplateForm;