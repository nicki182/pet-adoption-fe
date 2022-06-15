import styled from 'styled-components';
import Image from 'next/image';
import  Flex  from '@components/generic/layouts/Flex';
import Grid from '@components/generic/layouts/Grid';
import { FC, ReactNode } from 'react';
import TemplateButtons from '../../sections/TemplateButtons';
const MyImg = styled(Image)`
clip-path:circle(50%);
`;
interface Props{
    image:string
    profile:ReactNode
    buttons?:{submit?:ReactNode,cancel:ReactNode}
}
const ProfileCardTemplate:FC<Props> = ({image,profile,buttons}) => {
    return <Flex direction='column' gap='big'>
        <MyImg alt='profileImage' layout='responsive' width={'100%'} height='100%' src={image}/>
            {profile}
            {buttons &&
            <TemplateButtons 
            buttons={buttons}
            />
}
    </Flex>
}
export default ProfileCardTemplate;