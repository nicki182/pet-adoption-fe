import Flex from '@components/generic/layouts/Flex';
import Grid from '@components/generic/layouts/Grid';
import Typography from '@components/generic/text/Typography';
import useTranslate from '@hooks/generic/useTranslate';
import { Animal } from '@interfaces';
import Image from 'next/image';
import { FC } from 'react';
import  PrimaryButton  from '@components/generic/buttons/Primary';
import  SecondaryButton  from '@components/generic/buttons/Secondary';
import  styled  from 'styled-components';
const MyImage = styled(Image)`
clip-path:circle(70%);
grid-row:1/3;
`;
const MyFlex = styled(Flex)`
grid-column:1/3;
`;  
interface AnimalCard extends Omit<Animal,'user'>{
    disabledSave:boolean;
}
export interface AnimalCardTemplateProps {
    animal: AnimalCard
}
const AnimalCardTemplate:FC<AnimalCardTemplateProps> = ({ animal }) => {
    const {translate} = useTranslate()
    const handleLearnMore = ()=>{

    }
    const handleSave = ()=>{
    }
    return (
            <Grid rows={'auto'}  gap='small' cols={2} >
                <MyImage alt='cat' layout='responsive' width={'90%'} height='90%' src={animal.image}/>
                <Grid rows='auto' gap='medium' cols={2}>
                    <Typography element='label'>
                        {translate('NAME')+':'}
                    </Typography>
                    <Typography element='p'>
                    {animal.name}
                    </Typography>
                    <Typography element='label'>
                        {translate('BREED')+':'}
                    </Typography>
                    <Typography element='p'>
                    {animal.breed}
                    </Typography>
                    <Typography element='label'>
                        {translate('TYPE')+':'}
                    </Typography>
                    <Typography element='p'>
                    {animal.type}
                    </Typography>
                    <Typography element='label'>
                        {translate('DESCRIPTION')+':'}
                    </Typography>
                    <Typography element='p'>
                    {animal.description}
                    </Typography>
                    </Grid>
                    <MyFlex justify='space-around' align='center'>
                        <PrimaryButton onClick={handleLearnMore} size='xlSmall'>Learn More</PrimaryButton>
                        <SecondaryButton onClick={handleSave} disabled={animal.disabledSave} size='xlSmall'>Save</SecondaryButton>
                        </MyFlex>
                </Grid>
                
    )
}
export default AnimalCardTemplate