import {FC} from 'react';
import Typography from "@components/generic/text/Typography"
import Inner from "@components/generic/layouts/Inner"
import  Flex  from '@components/generic/layouts/Flex';
import {TextColorType} from "@components/generic/text/interfaces"
interface Props {
    description: string;
    title: string;
    colorTitle?: TextColorType;
    colorDescription?: TextColorType;
}
const DescriptionTemplate:FC<Props> = ({ description,title,colorTitle, colorDescription }) => {
    return(<>
        <Flex direction="column" gap='medium'>
    <Typography isTitle={true} color={colorTitle} element={'h3'}>
        {title}
    </Typography>
    <Typography color={colorDescription} element={'p'}>
        {description}
    </Typography>
    </Flex>
    </>)
}
export default DescriptionTemplate;