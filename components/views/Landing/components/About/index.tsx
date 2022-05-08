import DescriptionTemplate from '@components/generic/templates/sections/DescriptionTemplate';
import  Box  from '@components/generic/Box';
import Inner from '@components/generic/layouts/Inner';
import { FC } from 'react';
//TODO:Redisgn section 
interface Props {}
const About:FC<Props> = ()=>{

    return <Box height='60vh' width='80%' backgroundColor='primary'>
        <Inner paddingX='medium' paddingY='medium'>
    <DescriptionTemplate
        title="About"
        description="This is a pet adoption website. We are a team of developers who are passionate about pet adoption. We are here to help you find the best pet for you."
        colorTitle="default"
        colorDescription="default"
    />
    </Inner>
    </Box>
}
export default About;