import Flex from '@components/generic/layouts/Flex';
import { TextColorType } from "@components/generic/text/interfaces";
import Typography from "@components/generic/text/Typography";
import { FC } from 'react';
interface Props {
    description: string;
    title: string;
    colorTitle?: TextColorType;
    colorDescription?: TextColorType;
}
const DescriptionTemplate:FC<Props> = ({ description,title,colorTitle, colorDescription }) => {
    return(<>
        <Flex direction="column" justify='flex-start' gap='medium'>
    <Typography isTitle={true} color={colorTitle} fontSize='huge' element={'h1'}>
        {title}
    </Typography>
    <Typography color={colorDescription} element={'p'}>
        {description}
    </Typography>
    </Flex>
    </>)
}
export default DescriptionTemplate;