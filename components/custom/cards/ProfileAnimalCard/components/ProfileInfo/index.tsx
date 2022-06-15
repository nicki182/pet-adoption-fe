import Grid from '@components/generic/layouts/Grid';
import Typography from '@components/generic/text/Typography';
import useTranslate from '@hooks/generic/useTranslate';
const ProfileInfo = ({animal}) => {
    const {translate} = useTranslate()
    return <Grid rows='auto' gap='medium' cols={2}>
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
                    <Typography element='label'>
                        {'Dietery Descriptions:'}
                    </Typography>
                    <Typography element='p'>
                    {animal.dieteryDescription}
                    </Typography>
                    <Typography element='label'>
                        {'Hypoallergic:'}
                    </Typography>
                    <Typography element='p'>
                    {animal.hypoallergic}
                    </Typography>
                    <Typography element='label'>
                        {'State:'}
                    </Typography>
                    <Typography element='p'>
                    {animal.state}
                    </Typography>
        </Grid>

    }
export default ProfileInfo;